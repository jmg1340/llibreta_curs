import React, { Component } from 'react'
import moment from 'moment'



export default class Llibreta extends Component {
	
	iframeRef = React.createRef();

	generar = () => {
		
		let { dataInici, dataFinal, festius, horaris} = this.props.dades

		const arrDades = this.preparacioDades( this.props.dades)
/* 
		const dPrimer = new Date("12/15/21");
		const dUltim  = new Date("01/14/22");

		let arrFestius = this.transformarTXTFestiusADatesFestius( dPrimer, festius )

		console.log("dPrimer", dPrimer)
		console.log("arrFestius", arrFestius)
 */

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

	
		// eslint-disable-next-line default-case
		arrDades.forEach( objDada => {
			// console.log("dia", objDada.diaNumero, objDada.diaHorari,  "mes:", objDada.mesNom, "novaPag", objDada.novaPagina)
			if (objDada.novaPagina) ctx.doc.addPage()

			switch (objDada.diaSetmana) {
				case 1: //Dilluns
					this.pintaDia({
						d: objDada.data,
						ctx: ctx,
						horaris: horaris,
						diaSetmana: objDada.diaSetmana,
						diaNumero: objDada.diaNumero,
						mesNom: objDada.mesNom,
						diaHorari: objDada.diaHorari,
						x: 30, 
						y: 50,
						xLinia: 80, 
						yLinia: 50,
					})
					break
				case 2: //Dimarts
					this.pintaDia({
						d: objDada.data,
						ctx: ctx,
						horaris: objDada.horaris,
						diaSetmana: objDada.diaSetmana,
						diaNumero: objDada.diaNumero,
						mesNom: objDada.mesNom,
						diaHorari: objDada.diaHorari,
						x: 30, 
						y: 50 + 150,
						xLinia: 80, 
						yLinia: 50 + 150,
					})
					break
				case 3: //Dimecres
					this.pintaDia({
						d: objDada.data,
						ctx: ctx,
						horaris: objDada.horaris,
						diaSetmana: objDada.diaSetmana,
						diaNumero: objDada.diaNumero,
						mesNom: objDada.mesNom,
						diaHorari: objDada.diaHorari,
						x: 30, 
						y: 50 + 150*2,
						xLinia: 80, 
						yLinia: 50 + 150*2,
					})
					break
				case 4: //Dijous
					this.pintaDia({
						d: objDada.data,
						ctx: ctx,
						horaris: objDada.horaris,
						diaSetmana: objDada.diaSetmana,
						diaNumero: objDada.diaNumero,
						mesNom: objDada.mesNom,
						diaHorari: objDada.diaHorari,
						x: 30, 
						y: 50 + 150*3,
						xLinia: 80, 
						yLinia: 50 + 150*3,
					})
					break
				case 5: //Divendres
					this.pintaDia({
						d: objDada.data,
						ctx: ctx,
						horaris: objDada.horaris,
						diaSetmana: objDada.diaSetmana,
						diaNumero: objDada.diaNumero,
						mesNom: objDada.mesNom,
						diaHorari: objDada.diaHorari,
						x: 30, 
						y: 50 + 150*4,
						xLinia: 80, 
						yLinia: 50 + 150*4,
					})
					break
			}

			

		})




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
		// let diaSetmana = objParametres.diaSetmana
		let horarisDia = objParametres.diaHorari
		let diaNumero = objParametres.diaNumero
		let mesNom = objParametres.mesNom


		Object.keys( horaris[horarisDia] ).forEach( (keyLinia) => {
			let objHM = horaris[horarisDia][keyLinia]

			let xText = 3
			let yText = 7

			doc.lineJoin('miter').rect(xLinia, yLinia, 50, hLinia).stroke("grey");					// pinta cuadre hora
			doc.text(objHM.hora, xLinia + xText, yLinia + yText)
			
			doc.lineJoin('miter').rect(xLinia + 50, yLinia, 70, hLinia).stroke("grey");     // pinta quadre materia
			doc.text(objHM.materia, xLinia + 50 + xText, yLinia + yText)

			doc.lineJoin('miter').rect(xLinia + 50 + 70, yLinia, 360, hLinia).stroke("grey");   // pinta quadre contingut


			yLinia += hLinia


		})


		// pinta el recuadre general del dia
		doc.lineJoin('miter').rect(x, y, 530, h).stroke("black");

		// doc.text(objDS[diaSetmana], x+3, y+3)
		doc.text(horarisDia, x+3, y+3)
		doc.fontSize(15)
		// doc.text(objParametres.d.getDate(), x+10, y+20)
		doc.text(diaNumero, x+10, y+20)
		doc.fontSize(8)
		// doc.text(this.nomMes(objParametres.d.getMonth()), x+3, y+40)
		doc.text(mesNom, x+3, y+40)

	}




	preparacioDades(objDadesProps) {
		const { dataInici, dataFinal, festius, horaris} = objDadesProps

		const dPrimer = new Date("09/15/21");
		const dUltim  = new Date("06/22/22");

		const arrFestius = this.transformarTXTFestiusADatesFestius( dPrimer, festius )
		const objDH = { 1: "Dll", 2: "Dm", 3: "Dcr", 4: "Dj", 5: "Dv"	}
		let numSetmanaAnterior = this.numeroSetmana(dPrimer)
		let numSetmana = this.numeroSetmana(dPrimer)
		
		let arr =[]
		for (let d=dPrimer; d <= dUltim; d.setDate(d.getDate() + 1)){

			let diaSetmana = d.getDay()   // 0 - Diumenge; 1 - Dilluns; ...
			let esFestiu = arrFestius.some( dFestiu =>  dFestiu.getTime() === d.getTime())

			// si el dia no es un dissabte, diumenge o festiu...
			if ( (diaSetmana !== 6 && diaSetmana !== 0) && !esFestiu ) {
				
				numSetmanaAnterior = numSetmana
				numSetmana = this.numeroSetmana(d)
				
				let obj = {
					data: d,
					diaSetmana: d.getDay(),   // 0 - Diumenge; 1 - Dilluns; ...
					mes: d.getMonth(),  // 0 - Gener; 1 - Febrer; ...
					mesNom: this.nomMes(d.getMonth()),
					diaNumero: d.getDate(),
					diaHorari: objDH[diaSetmana],
					novaPagina: numSetmana !== numSetmanaAnterior,
					horaris: horaris
				}

				// console.log("dia:", `${obj.diaNumero} (${obj.diaHorari})`, "mes:", obj.mesNom, "S:", numSetmana, "SA:", numSetmanaAnterior, obj.novaPagina)

				arr.push(obj)
			}
		}

		return arr

	}



	numeroSetmana = data => {

		var m = moment(); // Initial moment object

		// Create the new date
		var myDate = data;
		var newDate = moment(myDate);
		
		// Inject it into the initial moment object
		m.set(newDate.toObject());

		return m.isoWeek()

	}



	transformarTXTFestiusADatesFestius = ( dPrimer, festius ) => {
		
		let anyDPrimer = dPrimer.getFullYear()

		// 1. separo en una nova array les dades de festius que son rangs. Per ex "22/12 - 8/1"
		let arrTXTRangs = festius.filter( (festiu) => festiu.includes("-"))

		// 2. separo en una nova array les dades que son festius individuals. Per ex "12/10"
		let arrTXTIndiv = festius.filter( (festiu) => !festiu.includes("-"))

		
		// 3. Transformacio de les dades TXT inidviduals a DATA
		let arrDATAIndiv = arrTXTIndiv.map( (festiu) => {
			let [ diaf, mesf ] = festiu.split("/")
			return ( parseInt(mesf) < 9) ? new Date( `${mesf}/${diaf}/${anyDPrimer +1}`) : new Date( `${mesf}/${diaf}/${anyDPrimer}`) 
		})


		// 4. generar per cada rang les dates compreses en el rang
		let arrDATARangs = []
		arrTXTRangs.forEach ( rangTXT => {
			
			let [ txtDataInferior, txtDataSuperior ] = rangTXT.split("-")
			let [ diaInf, mesInf ] = txtDataInferior.trim().split("/")
			let [ diaSup, mesSup ] = txtDataSuperior.trim().split("/")
			let dataInf = ( parseInt(mesInf) < 9) ? new Date( `${mesInf}/${diaInf}/${anyDPrimer +1}`) : new Date( `${mesInf}/${diaInf}/${anyDPrimer}`)
			let dataSup = ( parseInt(mesSup) < 9) ? new Date( `${mesSup}/${diaSup}/${anyDPrimer +1}`) : new Date( `${mesSup}/${diaSup}/${anyDPrimer}`)

			// console.log("dataInf", dataInf, "dataSup", dataSup)

			for (let df=dataInf; df <= dataSup; df.setDate(df.getDate() + 1)){
				// console.log("df", df)
				arrDATARangs.push(new Date(df))
			}

			// console.log("arrDATARangs", arrDATARangs)

		})


		// 5. retorem els 2 arrays concatenats
		return arrDATAIndiv.concat(arrDATARangs)


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
