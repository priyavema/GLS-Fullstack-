$(function(){
    
         $.ajax({
             type:'GET',
             url: 'simple.json',
             dataType:'JSON',
             success:function(data){
                 $.each(data.steps, function(key, val){
                    console.log(val.selector);
                    $(val.selector+ '> .tooltiptext').text(val.content);
                   
                   
                 })
             },
             error:function(){
                                 
             }
         });
         
         
         });
