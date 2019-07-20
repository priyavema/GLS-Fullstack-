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
                                 
             }
            
         });

        function callTooltip(result){
         for(var i =0;i < result.steps.length;i++)
            {
                
            var item = result.steps[i];
            console.log(item.content);
            
            }
        }    
         
         });
