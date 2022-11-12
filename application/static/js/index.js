import { setupModel } from "./model-runner.js";
import { setupBarGraph, updateBarGraph } from "./bar-graph.js";
window.onload=()=>{
    let URL = 'https://teachablemachine.withgoogle.com/models/Ng01Nurd5/';
    loadandrunModel(URL)
}

function loadandrunModel(URL){
    $('#webcam-wrapper').empty()
    $('#graph-wrapper').empty()

    // setupBarGraph is defined in the js/bar-graph.js file
    setupBarGraph(URL);
    // setupModel is defined in the js/model-runner.js file
    // we pass in another function: updateBarGraph (defined in the js/bar-graph.js file)
    // setupModel will store the updateBarGraph function,
    // and call it every time it has new prediction data from the model
    setupModel(URL, data => {
        updateBarGraph(data);
    });
}

$("#clearButton").on("click", function() {
    $("#model_url").val("")
});

$("#loadModelButton").click(function(){
    let url = $("#model_url").val()
    loadandrunModel(url)
});