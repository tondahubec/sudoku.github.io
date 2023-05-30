function download(pages,diff){
    function generate_img(sudokuStr){  
        const gridSize = 9;
    
    
        const canvas = document.createElement('canvas');
        canvas.width = canvas.height = 450;
        const ctx = canvas.getContext('2d');
    
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 2;
    
        for (let i = 0; i <= gridSize; i++) {
            ctx.beginPath();
            ctx.moveTo(i * 50, 0);
            ctx.lineTo(i * 50, canvas.height);
            ctx.stroke();
            if (i % 3 === 0 && i !== 0) {
                ctx.lineWidth = 4;
                ctx.stroke();
                ctx.lineWidth = 2;
            }
        }
    
        for (let i = 0; i <= gridSize; i++) {
            ctx.beginPath();
            ctx.moveTo(0, i * 50);
            ctx.lineTo(canvas.width, i * 50);
            ctx.stroke();
            if (i % 3 === 0 && i !== 0) {
                ctx.lineWidth = 4;
                ctx.stroke();
                ctx.lineWidth = 2;
            }
        }
    
    
        ctx.font = 'bold 24px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#000';
    
        for (let i = 0; i < sudokuStr.length; i++) {
            const row = Math.floor(i / gridSize);
            const col = i % gridSize;
            const num = sudokuStr.charAt(i);
        
            if (num !== '.') {
                ctx.fillText(num, col * 50 + 25, row * 50 + 25);
            }
            }
        
            const imageData = canvas.toDataURL();
        
            return imageData;
        }
    
    
    function generate_pdf(pages,diff) {
        const doc = new jsPDF();
    
        for (let i = 0; i < pages ; i++){
    
        const firstImgData = generate_img(sudoku.generate(diff));
        const secondImgData = generate_img(sudoku.generate(diff));    
      
        doc.addImage(firstImgData, 'PNG', 50, 25, 110, 110);
      
        doc.addImage(secondImgData, 'PNG', 50, 160, 110, 110);
      
        if ( i < pages -1){
            doc.addPage();
        }
        
    
        }
        doc.autoPrint();
        window.open(doc.output('bloburl'), '_self');
    }
    
    
    generate_pdf(pages,parseInt(diff));
}   


