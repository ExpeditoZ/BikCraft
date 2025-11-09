
if(window.SimpleSlide) {
  new SimpleSlide({
    slide: 'quote',
    time: 5000, 
  })
  
  new SimpleSlide({
    slide: 'portfolio',
    time: 5000,
    nav: true,
  })
}
if(window.SimpleAnime) {
  new SimpleAnime();
}
if(window.SimpleForm){
  new SimpleForm({
    form: ".formphp", 
    button: "#send", 
    erro: "<div id='form-error'><h2>Erro no envio!</h2><p>Um erro ocorreu, tente enviar uma mensagem para o nosso email: expedito.farias.melo2003@gmail.com.</p></div>", 
    sucesso: "<div id='form-success'><h2>Formulário enviado com sucesso!</h2><p>Nossa equipe entrará em contato com você em breve.</p></div>", 
  });
}