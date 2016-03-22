$(function(){
  $("h3#javascriptterm").click(function() {
    $("p#javascriptdefinition").removeClass("definition");
    $("h3#javascriptterm").addClass("disappear");
  });

  $("p#javascriptdefinition").click(function() {
    $("h3#javascriptterm").removeClass("disappear");
    $("p#javascriptdefinition").addClass("definition");
  });

  $("h3#operatorsterm").click(function() {
    $("p#operatorsdefinition").toggle()/*removeClass("definition")*/;
    $("h3#operatorsterm").toggle()/*addClass("disappear")*/;
  });

  $("p#operatorsdefinition").click(function() {
    $("h3#operatorsterm").toggle()/*removeClass("disappear")*/;
    $("p#operatorsdefinition").toggle()/*addClass("definition")*/;
  });


  $("h3#functionsterm").click(function() {
    $("p#functionsdefinition").removeClass("definition");
    $("h3#functionsterm").addClass("disappear");
  });

  $("p#functionsdefinition").click(function() {
    $("h3#functionsterm").removeClass("disappear");
    $("p#functionsdefinition").addClass("definition");
  });

});
