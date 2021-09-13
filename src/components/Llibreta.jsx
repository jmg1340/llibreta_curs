import React, { Component } from 'react'



export default class Llibreta extends Component {
	
	iframeRef = React.createRef();

	generar = () => {
		
		let { dataInici, dataFinal, festius, horaris} = this.props.dades
		console.log(horaris)

    var stream = window.blobStream();
    var ctx = new window.canvas2pdf.PdfContext(stream, {
      size: 'A4',
      margins: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      },
			layout: "portrait"
    });

		ctx.doc.info.Title = 'LlibretaCurs'


		

		ctx.fillStyle='black';
		ctx.doc.fontSize(8)


		// ------------------------------------------


		// ctx.doc.text("Aixo es una prova", 139.0, 65.0 - 7);

		const dPrimer = new Date("09/29/21");
		const dUltim  = new Date("10/11/21");

		
		
		
		let mesAnterior = dPrimer.getMonth()
		
		for (let d=dPrimer; d <= dUltim; d.setDate(d.getDate() + 1)){

			let diaSetmana = d.getDay()   // 0 - Diumenge; 1 - Dilluns; ...
			let mesActual = d.getMonth()  // 0 - Gener; 1 - Febrer; ...


			// si el dia de la setmana no es un dissabte o diumenge...
			if ( diaSetmana !== 6 && diaSetmana !== 0 ) {
				
				if ( mesActual !== mesAnterior ) {
					ctx.doc.addPage();
					mesAnterior = mesActual
				}
				ctx.doc.fontSize(15)
				ctx.doc.text(this.nomMes(d.getMonth()), 30, 20)
				ctx.doc.fontSize(8)
				
				
				
				// eslint-disable-next-line default-case
				switch (diaSetmana) {
					case 1: //Dilluns
						this.pintaDia({
							d:d,
							ctx: ctx,
							horaris: horaris,
							diaSetmana: diaSetmana,
							x: 30, 
							y: 50,
							xLinia: 80, 
							yLinia: 50,
						})
						break
					case 2: //Dimarts
						this.pintaDia({
							d:d,
							ctx: ctx,
							horaris: horaris,
							diaSetmana: diaSetmana,
							x: 30, 
							y: 50 + 150,
							xLinia: 80, 
							yLinia: 50 + 150,
						})
						break
					case 3: //Dimecres
						this.pintaDia({
							d:d,
							ctx: ctx,
							horaris: horaris,
							diaSetmana: diaSetmana,
							x: 30, 
							y: 50 + 150*2,
							xLinia: 80, 
							yLinia: 50 + 150*2,
						})
						break
					case 4: //Dijous
						this.pintaDia({
							d:d,
							ctx: ctx,
							horaris: horaris,
							diaSetmana: diaSetmana,
							x: 30, 
							y: 50 + 150*3,
							xLinia: 80, 
							yLinia: 50 + 150*3,
						})
						break
					case 5: //Divendres
						this.pintaDia({
							d:d,
							ctx: ctx,
							horaris: horaris,
							diaSetmana: diaSetmana,
							x: 30, 
							y: 50 + 150*4,
							xLinia: 80, 
							yLinia: 50 + 150*4,
						})
						if (mesActual === mesAnterior) ctx.doc.addPage()
						break
				}
			}
			

		}




		// ------------------------------------------

		ctx.end()
    // eval(text);
    ctx.stream.on('finish',  () => {
			this.iframeRef.current.src = ctx.stream.toBlobURL('application/pdf');
    });


	}
	 

	pintaDia = (objParametres) => {
		
		let objDS = { 1: "Dll", 2: "Dm", 3: "Dcr", 4: "Dj", 5: "Dv"	}

	
		let x = objParametres.x
		let y = objParametres.y
		let h = 150  // altura quadre del dia

		let xLinia = objParametres.xLinia
		let yLinia = objParametres.yLinia
		let hLinia = 18.75 // altura quadre del horari

		let doc = objParametres.ctx.doc
		let horaris = objParametres.horaris
		let diaSetmana = objParametres.diaSetmana
			
		

		// si el numero del dia de la setmana coincideix amb un horari
		if (  Object.keys(horaris).some( (key) => key === objDS[diaSetmana])  ) {
			console.log("Dia Setmana coincideix amb " + objDS[diaSetmana])
			
			// let xLinia = 80
			// let yLinia = 50 + ((diaSetmana-1) * h)
			
			
			let horarisDia = horaris[objDS[diaSetmana]]
			Object.keys( horarisDia ).forEach( (keyLinia) => {
				let objHM = horarisDia[keyLinia]
				let xText = 3
				let yText = 7

				doc.lineJoin('miter').rect(xLinia, yLinia, 50, hLinia).stroke("grey");					// pinta cuadre hora
				doc.text(objHM.hora, xLinia + xText, yLinia + yText)
				
				doc.lineJoin('miter').rect(xLinia + 50, yLinia, 70, hLinia).stroke("grey");     // pinta quadre materia
				doc.text(objHM.materia, xLinia + 50 + xText, yLinia + yText)

				doc.lineJoin('miter').rect(xLinia + 50 + 70, yLinia, 360, hLinia).stroke("grey");   // pinta quadre contingut
				// doc.text(objHM.hora, xLinia + 50 + 70 + xText, yLinia + yText)

				yLinia += hLinia


			})
		}

		// pinta el recuadre general del dia
		doc.lineJoin('miter').rect(x, y, 530, h).stroke("black");

		doc.text(objDS[diaSetmana], x+3, y+3)
		doc.fontSize(15)
		doc.text(objParametres.d.getDate(), x+10, y+20)
		doc.fontSize(8)



	}


	diferenciaDies = (date1, date2) => {
    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between two dates
    const diffInTime = date2.getTime() - date1.getTime();

    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;		
	}

  nomMes = (numeroMes) => {
    // eslint-disable-next-line default-case
    switch (numeroMes){
      case 0:
        return "Gener"
      case 1:
        return "Febrer"
      case 2:
        return "Març"
      case 3:
        return "Abril"
      case 4:
        return "Maig"
      case 5:
        return "Juny"
      case 6:
        return "Juliol"
      case 7:
        return "Agost"
      case 8:
        return "Setembre"
       case 9:
        return "Octubre"
      case 10:
        return "Novembre"
      case 11:
        return "Desembre"
    }
	}








	render() {
		return (
			<div>

				<iframe
					ref = { this.iframeRef }
					style={{border: "1px solid black", textAlign: "center"}}
					width="800"
					height="1047"
				></iframe>
				
			</div>
		)
	}
}
