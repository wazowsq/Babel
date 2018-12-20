//Script para deixar o scroll começar no final do elemento.
var objDiv = document.getElementById("scroll");
objDiv.scrollTop = objDiv.scrollHeight;


//Script fake de toggle para abrir mais informações

//Msg 1
$("#info-detail1").click(function() { $("#tgl-act1").toggleClass("active-tg"); $(this).toggleClass("dp-active"); });
//Msg 2
$("#info-detail2").click(function() { $("#tgl-act2").toggleClass("active-tg"); $(this).toggleClass("dp-active"); });
//Msg 3
$("#info-detail3").click(function() { $("#tgl-act3").toggleClass("active-tg"); $(this).toggleClass("dp-active"); });
//Msg 4
$("#info-detail4").click(function() { $("#tgl-act4").toggleClass("active-tg"); $(this).toggleClass("dp-active"); });
//Msg 5
$("#info-detail5").click(function() { $("#tgl-act5").toggleClass("active-tg"); $(this).toggleClass("dp-active"); });
//Msg 6
$("#info-detail6").click(function() { $("#tgl-act6").toggleClass("active-tg"); $(this).toggleClass("dp-active"); });
//Msg 7
$("#info-detail7").click(function() { $("#tgl-act7").toggleClass("active-tg"); $(this).toggleClass("dp-active"); });
//Msg 8
$("#info-detail8").click(function() { $("#tgl-act8").toggleClass("active-tg"); $(this).toggleClass("dp-active"); });
//Msg 9
$("#info-detail9").click(function() { $("#tgl-act9").toggleClass("active-tg"); $(this).toggleClass("dp-active"); });
//Msg 10
$("#info-detail10").click(function() { $("#tgl-act10").toggleClass("active-tg"); $(this).toggleClass("dp-active"); });


//Script para abrir filtro de pesquisa de contatos
$("#searchContact").click(function() {
    $("#filterSearch").toggleClass("activeFilter");
});


//Script para abrir filtro de conversa
$("#searchMsg").click(function() {
    $("#filterMsg").toggleClass("activeFilter");
});


//Script para habilitar pesquisa
$("#researchLink").click(function() {
    $(".area-add-right").addClass("hide");
    $(".area-add-right.contact").addClass("show").removeClass("hide");
    $(".col-area.area-msg").addClass("division-3").removeClass("division-2");
    $(this).addClass("active");
});
//Script para desabilitar pesquisa
$("#btnCloseContact").click(function() {
    $(".area-add-right.contact").addClass("hide").removeClass("show");
    $(".col-area.area-msg").addClass("division-2").removeClass("division-3");
    $("#researchLink").removeClass("active");
});


//Script para habilitar pesquisa
$("#knowledgeLink").click(function() {
    $(".area-add-right").addClass("hide");
    $(".area-add-right.knowledge").addClass("show").removeClass("hide");
    $(".col-area.area-msg").addClass("division-3").removeClass("division-2");
    $(this).addClass("active");
});
//Script para desabilitar pesquisa
$("#btnCloseKnowledge").click(function() {
    $(".area-add-right.knowledge").addClass("hide").removeClass("show");
    $(".col-area.area-msg").addClass("division-2").removeClass("division-3");
    $("#knowledgeLink").removeClass("active");
});


//Script para habilitar pesquisa
$("#searchCont").click(function() {
    $(".area-add-right").addClass("hide");
    $(".area-add-right.research").addClass("show").removeClass("hide");
    $(".col-area.area-msg").addClass("division-3").removeClass("division-2");
    $(this).addClass("active");
});
//Script para desabilitar pesquisa
$("#btnCloseResearch").click(function() {
    $(".area-add-right.research").addClass("hide").removeClass("show");
    $(".col-area.area-msg").addClass("division-2").removeClass("division-3");
    $("#searchCont").removeClass("active");
});