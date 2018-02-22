var fs = require('fs');

var configFile = (function(){
    for (var i = 0; i < process.argv.length; i++){
        if (process.argv[i].indexOf('-config=') === 0)
            return process.argv[i].split('=')[1];
    }
    return 'config.json';
})();


try {
    global.config = JSON.parse(fs.readFileSync(configFile));
}
catch(e){
    console.error('Failed to read config file ' + configFile + '\n\n' + e);
    return;
}

var donationAddresses = {
    devDonation: {
        XSM: 'XSwTq9m91yS8ta1x8ujyZ4gnU47TJQxxMgMARMKamAeoZsJ2oo91VtoDBVpEdBCPN2SzJduMiBn8BDKxYdjCQevS2Ef1Qm3nM'
    },
    coreDevDonation: {
        XSM: 'XSwTq9m91yS8ta1x8ujyZ4gnU47TJQxxMgMARMKamAeoZsJ2oo91VtoDBVpEdBCPN2SzJduMiBn8BDKxYdjCQevS2Ef1Qm3nM'
    },
    extraFeaturesDevDonation: {
        XSM: 'XSwTq9m91yS8ta1x8ujyZ4gnU47TJQxxMgMARMKamAeoZsJ2oo91VtoDBVpEdBCPN2SzJduMiBn8BDKxYdjCQevS2Ef1Qm3nM'
    }
};

global.donations = {};

for(var configOption in donationAddresses) {
    var percent = config.blockUnlocker[configOption];
    var wallet = donationAddresses[configOption][config.symbol];
    if(percent && wallet) {
        global.donations[wallet] = percent;
    }
}

global.version = "v1.1.4";
