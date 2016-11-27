$(document).ready(function(){
  var a,b;
   $("#inputA").on('click', function(){
          $("#inputA").val("");
        });
    $("#inputB").on('click', function(){
          $("#inputB").val("");
        });
    $("#inputA").on('keyup', function(){
          a = parseFloat($(this).val());
          if(isNaN(a)){ $(this).val("Wrong input!");
                        $(this).removeClass("default");
                        $(this).addClass("warning");
                         }
          else {   
                 $(this).removeClass("warning");
                 $(this).addClass("default");
                         }             
        });
    $("#inputB").on('keyup', function(){
         b = parseFloat($("#inputB").val());
          if(isNaN(b)){ $(this).val("Wrong input!");
                        $(this).removeClass("default");
                        $(this).addClass("warning");
                         }
          else {   
                 $(this).removeClass("warning");
                 $(this).addClass("default");
                         }                  
        });
    $("#btnCalcPer").on('click',function(){
          if(!(isNaN(a))&&(!(isNaN(b))))
          $("#perimeter").val(2*(a+b));
          else $("#perimeter").val("");
        });
    $("#btnCalcAre").on('click',function(){
          if(!(isNaN(a))&&(!(isNaN(b)))) 
          $("#area").val(a*b);   
          else $("#area").val("");
        });
});