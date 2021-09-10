import React, { Component } from 'react'

// import blobStream from '../libPDF/blob-stream.js'
// import canvas2pdf from '../libPDF/canvas2pdf.js'



export default class Llibreta extends Component {
	
	iframe = React.createRef()

	generar = () => {
		
		let { dataInici, dataFinal, festius, horaris} = this.props.dades

    var stream = blobStream();
    var ctx = new canvas2pdf.PdfContext(stream, {
      size: 'A4',
      margins: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      },
			layout: "portrait"
    });

		

		ctx.fillStyle='red';
		ctx.doc.fontSize(8)


		// ------------------------------------------


		ctx.doc.text("Aixo es una prova", 139.0, 65.0 - 7);





		// ------------------------------------------

		ctx.end()
    // eval(text);
    ctx.stream.on('finish', function () {
      this.iframe.src = ctx.stream.toBlobURL('application/pdf');
    });


	}
	
	render() {
		return (
			<div>
				Aquí va la llibreta

				<iframe
					ref = { this.iframe }
					style={{border: "1px solid black", textAlign: "center"}}
					width="800"
					height="1047"
				></iframe>

			</div>
		)
	}
}
