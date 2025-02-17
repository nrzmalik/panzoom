window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  StorylinePanzoom.init('Peg', {
    maxScale: 4,
    minScale: 1
});
}

window.Script2 = function()
{
  StorylinePanzoom.init('Lion', {
    maxScale: 4,
    minScale: 1
});
}

window.Script3 = function()
{
  StorylinePanzoom.init('Leopard', {
    maxScale: 4,
    minScale: 1
});
}

};
