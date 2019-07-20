$(function(){

         $.ajax({
             type:'GET',
             url: 'simple.json',
             dataType:'JSON',
             
             success:function(data){
               
                 $.each(data.steps, function(key, val){
                  
                     $(val.selector+ '> .tooltiptext').text(val.content);
                      
                  });
                 callTooltip(data);
             },
             error:function(){                      
           
                alert('error occured.');
             }
         });

        function callTooltip(result){     
        var i = 0;
        function f() {
        
            $(result.steps[i].selector+ '> .tooltiptext').css("display","block");
            i++;
            if( i < result.steps.length ){
                setTimeout( f, 1000 );
                
            }
        }
        f();
        }
$(document).on('click','body',function(){ 
  $('.tooltip > .tooltiptext').css("display","none");
});

         });
