//exceute every 1 min
cron.schedule('*/1 * * * *', function(){
    var shell =  var commandList = [
        "node scriw:pt1.js",
        "npm run script -- PeterGood"
    ]    shell.series(commandList , function(err){
    //    console.log('executed many commands in a row'); 
        console.log('done')
    });
});
