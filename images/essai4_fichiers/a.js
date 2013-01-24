
document.documentElement.className += " script";

jQueryConfig = {
    depend:{
        jsonp:                   false,
        pluginRoot:              '/WebRoot/StoreTypes/6.14.1/StratoFR/GUI',
        i18nRoot:                '/WebRoot/StoreTypes/6.14.1/StratoFR/GUI/ep/i18n',
        tmplRoot:                '/WebRoot/StoreTypes/6.14.1/StratoFR/GUI',
        dictRoot:                '/WebRoot/StoreTypes/6.14.1/StratoFR/GUI'
    },
    i18n:{
        region:                  'fr_BE'.replace(/_/,'-'), //convert en_GB to en-GB for javascript
        currency:                [
	    	
	    		'EUR'
	    	
	    	
	    		,
	    	
	    	
	    		'EUR'
	    	
	    	
	    ]
    },
    dict:{
        region:                  'fr'
    },
    storage:{
        namespace:               'StoreLFR103894'+'::'
    },
    ajax: {
         fileSizeMax:            25600 * 1024
    },
    metaparse: {
    	autoparse:               true
    },
    mime: {
        groups: {
            'image/*':           'image/png,image/jpeg,image/jpg,image/gif,image/vnd.microsoft.icon,image/x-icon,image/x-win-bitmap',
            'document/*':        'application/pdf,application/msword,application/vnd.ms-excel,application/rtf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'audio/*':           'audio/mpeg,audio/x-ms-wma,audio/ogg,audio/flac,audio/x-ms-wma',
            'video/*':           'video/x-msvideo,video/mp4,video/mpeg,video/x-ms-wmv,video/x-flv'
        }
    },
    noConflict: 'jq'
};

epConfig = {
    version:                     '6.14.1',
    webRoot:                     '/WebRoot',
    storeName:                   'StoreLFR',
    storeWebRoot:                '/WebRoot/StoreLFR',
    storeRoot:                   '/WebRoot/StoreTypes/6.14.1/StratoFR',
    storeTypeRoot:               '/WebRoot/StoreTypes/6.14.1/StratoFR',
    javascriptRoot:              '/WebRoot/StoreTypes/6.14.1/StratoFR/GUI',
    siteRoot:                    '/WebRoot/StoreLFR/Shops/62035976',
    siteId:                      '103894',
    siteGuid:                    '4581F51F-919B-35E4-B26E-D44ED1C60FAC',
    iconsRoot:                   '/WebRoot/StoreTypes/6.14.1/StratoFR/BO/icons',
    maxContentLength:            '25600',
    debugLevel:                  0,
    languageId:                  '3',
    language:                    'fr'
};