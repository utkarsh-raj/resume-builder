let doc = new jsPDF('p','pt','a4');
doc.addHTML(document.body,function() {
    doc.save('Resume.pdf');
});