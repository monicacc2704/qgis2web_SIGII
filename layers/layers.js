var wms_layers = [];

var lyr_Ortoimagen_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.ign.es/wms-inspire/pnoa-ma",
    attributions: ' ',
                              params: {
                                "LAYERS": "OI.OrthoimageCoverage",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortoimagen",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortoimagen_0, 0]);
var format_ProvinciasAndaluca_1 = new ol.format.GeoJSON();
var features_ProvinciasAndaluca_1 = format_ProvinciasAndaluca_1.readFeatures(json_ProvinciasAndaluca_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProvinciasAndaluca_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProvinciasAndaluca_1.addFeatures(features_ProvinciasAndaluca_1);
var lyr_ProvinciasAndaluca_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ProvinciasAndaluca_1, 
                style: style_ProvinciasAndaluca_1,
                interactive: true,
                title: '<img src="styles/legend/ProvinciasAndaluca_1.png" /> Provincias Andalucía'
            });
var lyr_OrientacinNS_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Orientación N/S",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/OrientacinNS_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-557275.195156, 4397521.619893, -549545.761425, 4404892.329491]
                            })
                        });
var lyr_Distanciaacanales_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Distancia a canales",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Distanciaacanales_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-557275.195156, 4397515.376345, -549539.418203, 4404892.456008]
                            })
                        });
var lyr_ndicedeShannon_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Índice de Shannon",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ndicedeShannon_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-557272.298832, 4397510.249336, -549536.527542, 4404887.323408]
                            })
                        });
var lyr_Densidaddelpinsapo_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "Densidad del pinsapo",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Densidaddelpinsapo_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-557275.195156, 4397515.376345, -549539.418203, 4404892.456008]
                            })
                        });
var format_Resultadosdelasegmentacin_6 = new ol.format.GeoJSON();
var features_Resultadosdelasegmentacin_6 = format_Resultadosdelasegmentacin_6.readFeatures(json_Resultadosdelasegmentacin_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Resultadosdelasegmentacin_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Resultadosdelasegmentacin_6.addFeatures(features_Resultadosdelasegmentacin_6);
var lyr_Resultadosdelasegmentacin_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Resultadosdelasegmentacin_6, 
                style: style_Resultadosdelasegmentacin_6,
                interactive: true,
                title: '<img src="styles/legend/Resultadosdelasegmentacin_6.png" /> Resultados de la segmentación'
            });

lyr_Ortoimagen_0.setVisible(true);lyr_ProvinciasAndaluca_1.setVisible(true);lyr_OrientacinNS_2.setVisible(true);lyr_Distanciaacanales_3.setVisible(true);lyr_ndicedeShannon_4.setVisible(true);lyr_Densidaddelpinsapo_5.setVisible(true);lyr_Resultadosdelasegmentacin_6.setVisible(true);
var layersList = [lyr_Ortoimagen_0,lyr_ProvinciasAndaluca_1,lyr_OrientacinNS_2,lyr_Distanciaacanales_3,lyr_ndicedeShannon_4,lyr_Densidaddelpinsapo_5,lyr_Resultadosdelasegmentacin_6];
lyr_ProvinciasAndaluca_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'PROVINCIAS': 'PROVINCIAS', 'PROVINCI_1': 'PROVINCI_1', 'PROVINCIA': 'PROVINCIA', 'SUM__P_F45': 'SUM__P_F45', 'TSUM__P_F4': 'TSUM__P_F4', 'TSUM__P__1': 'TSUM__P__1', 'SUM_SUM_C2': 'SUM_SUM_C2', 'SUM_C2': 'SUM_C2', 'C1': 'C1', 'C2': 'C2', 'C3': 'C3', 'C4': 'C4', 'C5': 'C5', 'C6': 'C6', 'C7': 'C7', 'C8': 'C8', 'C9': 'C9', 'C10': 'C10', });
lyr_Resultadosdelasegmentacin_6.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_ProvinciasAndaluca_1.set('fieldImages', {'AREA': 'Hidden', 'PERIMETER': 'Hidden', 'PROVINCIAS': 'Hidden', 'PROVINCI_1': 'Hidden', 'PROVINCIA': 'TextEdit', 'SUM__P_F45': 'Hidden', 'TSUM__P_F4': 'Hidden', 'TSUM__P__1': 'Hidden', 'SUM_SUM_C2': 'Hidden', 'SUM_C2': 'Hidden', 'C1': 'Hidden', 'C2': 'Hidden', 'C3': 'Hidden', 'C4': 'Hidden', 'C5': 'Hidden', 'C6': 'Hidden', 'C7': 'Hidden', 'C8': 'Hidden', 'C9': 'Hidden', 'C10': 'Hidden', });
lyr_Resultadosdelasegmentacin_6.set('fieldImages', {'fid': 'Hidden', 'DN': 'Hidden', });
lyr_ProvinciasAndaluca_1.set('fieldLabels', {'PROVINCIA': 'no label', });
lyr_Resultadosdelasegmentacin_6.set('fieldLabels', {});
lyr_Resultadosdelasegmentacin_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});