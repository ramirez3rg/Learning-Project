// export

function drawStatusText(context, input, player){
    context.font = '30px Helvetica';
    context.fillText('last input: ' + input.lastkey, 20, 50);
    context.fillText('Active state: ' + player.currentState.state, 20, 90);
}