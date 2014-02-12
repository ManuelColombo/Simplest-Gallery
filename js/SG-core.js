/*
  definizione delle variabili
  lista : identifica gli elementi da ciclare
  controlli : tutti quegli elementi che al click devono far muovere la gallery
  	se l'elemento ha la classe 'prev' il click fa tornare la gallery all'elemento precedente
*/
lista = '#col-main .gallery img'; 
controlli = '.controller, .gallery img'; 

/*
  funzione moveGallery
  parametri( avanti :  bool, lista : jQuery OBJ)
  Se avanti è true va all'elemento successivo, se false va al precedente.
  Se finiscono gli elementi torna all'inizio.
*/
function moveGallery(avanti, lista){
  var $active = $(lista+':visible');
  
  if( avanti===true ) { 
    var $next = ( $active.next().length > 0 ) ? $active.next() : $(lista+':first');
  } else {
    var $next = ( $active.prev().length > 0 ) ? $active.prev() : $(lista+':last');
  }
  
  $active.fadeOut(function(){
    $next.fadeIn(); 
    });
}

/*
  document ready
  Gestisce il click sui controlli, 
  verifica la presenza della classe prev 
  e richiama la funzione moveGallery
*/

$(function(){
		$(controlli).click(function(e){
			e.preventDefault();
			if($(this).hasClass('prev')) { next=false; } else { next=true; }
			moveGallery(next, lista);
		});
});

