/*global angular, console*/

angular.module('empeerialApp', 
    ['angular-click-outside'
    ])
    .config(['$sceDelegateProvider', function($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
            // Allow same origin resource loads.
            'self',
            // Allow loading from our assets domain.  Notice the difference between * and **.
            'http://particle.golucid.co/**',
            'https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-157/**'
        ]);
    }])
    ////////////////
    ////START MAIN CTRL
    ////////////////
    .controller('mainCtrl', function($scope, $timeout, $rootScope) {

        console.log($scope.code);

        $scope.templates = [
                    {name:'Evaluation', icon:'forum',  short: 'Only involving a few individuals in peer review often leads to a slow, biased process. Subjectively rejected  work never makes it to the larger research community.', long:'The peer review process was designed to improve the quality of scientific publications, but research demonstrates this system is ineffective and may disservice science.  Peer review occurs by a small number of individuals that can be biased, the process is subjective and based on opinion rather than objective evaluation, errors are not completely detected, and there is a lack of transparency. The process can also be extremely slow, and research is often altered or rejected from publication before a wider community can evaluate the content, which biases the literature and disservices healthcare stakeholders.'},
                    {name:'Publication',  icon:'import_contacts', short: 'Scientific publishers control if and when research gets published, undermining individual studies and the totality of evidence on a topic.', preview:'images/shapeLibrary/aws-44px.png', recommended: 'false', example1:'images/examples/aws1.png', example2:'images/examples/aws2.png', example3:'images/examples/aws3.png', details: 'Accurately diagram AWS architecture with the official AWS Simple Icons. You can chart with network shapes, database symbols, and a variety of other Amazon Web Services elements.'},
                    {name:'Documentation',  icon:'create', short: 'Reproducing scientific findings is essential to understanding research outcomes. The current lack of research protocols and analysis techniques often leads to the “reproducibility crisis.”', preview:'images/shapeLibrary/azure-44px.png', recommended: 'false', example1:'images/examples/azure1.png', example2:'images/examples/azure2.png', example3:'images/examples/azure3.png', details:'Diagram your network infrastructure using official Microsoft Azure icons. You can accurately depict your architecture setup with the wide range of shapes, including those for cloud, enterprise, VMs, and more.'},
                    {name:'Communication',  icon:'forum', short: 'Without a system to support research dialogue between all healthcare stakeholders, the healthcare industry loses out on knowledge that may help translate research information into health-treatment and policy practices.', preview:'images/shapeLibrary/bpmn-44px.png', recommended: 'false', example1:'images/examples/bpmn1.png', example2:'images/examples/bpmn2.png', example3:'images/examples/bpmn3.png',example4:'images/examples/bpmn4.png', details: 'BPMN 2.0 is the most up-to-date version of business process modeling notation. Model common business activities like tasks, transactions, and end events.'},
                    {name:'Discovery', icon:'search', short: 'Discovering research involves separately searching numerous publication, media, and consumer channels and sifting through poor visual displays of information.', preview:'images/shapeLibrary/circuit-44px.png', recommended: 'false', example1:'images/examples/circuit1.png', example2:'images/examples/circuit2.png', example3:'images/examples/circuit3.png',example4:'images/examples/circuit4.png', details:'Create circuit diagrams to help you model processes for electrical engineering tasks. Our library is outfitted with custom options that increase ease of use and diagramming speed.'},
                    {name:'Access',  icon:'lock', short: 'Research is often locked behind a journal’s paywall and cannot be acquired without access to a university library or a good chunk of change.  Restricted access to research hinders the potential for innovation.', preview:'images/shapeLibrary/cisco-44px.png', recommended: 'false', example1:'images/examples/cisco1.png', example2:'images/examples/cisco2.png', example3:'images/examples/cisco3.png',example4:'images/examples/cisco4.png', details:'Cisco network icons are globally recognized symbols for diagramming network architecture. Use our standard shape set to model nodes and connections in a computer network.'},       
                ];
                $scope.bullets = [
                    {name:'Author-controlled communication and publication', icon:'forum',  short: 'Only involving a few individuals in peer review often leads to a slow, biased process. Subjectively rejected  work never makes it to the larger research community.', long:'The peer review process was designed to improve the quality of scientific publications, but research demonstrates this system is ineffective and may disservice science.  Peer review occurs by a small number of individuals that can be biased, the process is subjective and based on opinion rather than objective evaluation, errors are not completely detected, and there is a lack of transparency. The process can also be extremely slow, and research is often altered or rejected from publication before a wider community can evaluate the content, which biases the literature and disservices healthcare stakeholders.'},
                    {name:'Protocol registration and research facilitation',  icon:'import_contacts', short: 'Only involving a few individuals in peer review often leads to a slow, biased process. Subjectively rejected  work never makes it to the larger research community.', preview:'images/shapeLibrary/aws-44px.png', recommended: 'false', example1:'images/examples/aws1.png', example2:'images/examples/aws2.png', example3:'images/examples/aws3.png', details: 'Accurately diagram AWS architecture with the official AWS Simple Icons. You can chart with network shapes, database symbols, and a variety of other Amazon Web Services elements.'},
                    {name:'Open access pre-print peer review',  icon:'create', short: 'Only involving a few individuals in peer review often leads to a slow, biased process. Subjectively rejected  work never makes it to the larger research community.', preview:'images/shapeLibrary/azure-44px.png', recommended: 'false', example1:'images/examples/azure1.png', example2:'images/examples/azure2.png', example3:'images/examples/azure3.png', details:'Diagram your network infrastructure using official Microsoft Azure icons. You can accurately depict your architecture setup with the wide range of shapes, including those for cloud, enterprise, VMs, and more.'},
                    {name:'Manuscript development and version tracking',  icon:'forum', short: 'Only involving a few individuals in peer review often leads to a slow, biased process. Subjectively rejected  work never makes it to the larger research community.', preview:'images/shapeLibrary/bpmn-44px.png', recommended: 'false', example1:'images/examples/bpmn1.png', example2:'images/examples/bpmn2.png', example3:'images/examples/bpmn3.png',example4:'images/examples/bpmn4.png', details: 'BPMN 2.0 is the most up-to-date version of business process modeling notation. Model common business activities like tasks, transactions, and end events.'},
                    {name:'Guaranteed manuscript publication', icon:'search', short: 'Only involving a few individuals in peer review often leads to a slow, biased process. Subjectively rejected  work never makes it to the larger research community.', preview:'images/shapeLibrary/circuit-44px.png', recommended: 'false', example1:'images/examples/circuit1.png', example2:'images/examples/circuit2.png', example3:'images/examples/circuit3.png',example4:'images/examples/circuit4.png', details:'Create circuit diagrams to help you model processes for electrical engineering tasks. Our library is outfitted with custom options that increase ease of use and diagramming speed.'},
                    {name:'A data archive',  icon:'lock', short: 'Only involving a few individuals in peer review often leads to a slow, biased process. Subjectively rejected  work never makes it to the larger research community.', preview:'images/shapeLibrary/cisco-44px.png', recommended: 'false', example1:'images/examples/cisco1.png', example2:'images/examples/cisco2.png', example3:'images/examples/cisco3.png',example4:'images/examples/cisco4.png', details:'Cisco network icons are globally recognized symbols for diagramming network architecture. Use our standard shape set to model nodes and connections in a computer network.'},       
                    {name:'A social media network that promotes communication',  icon:'lock', short: 'Only involving a few individuals in peer review often leads to a slow, biased process. Subjectively rejected  work never makes it to the larger research community.', preview:'images/shapeLibrary/cisco-44px.png', recommended: 'false', example1:'images/examples/cisco1.png', example2:'images/examples/cisco2.png', example3:'images/examples/cisco3.png',example4:'images/examples/cisco4.png', details:'Cisco network icons are globally recognized symbols for diagramming network architecture. Use our standard shape set to model nodes and connections in a computer network.'}, 
                    {name:'A comprehensive search engine, news-feed, content classification, and other discovery features',  icon:'lock', short: 'Only involving a few individuals in peer review often leads to a slow, biased process. Subjectively rejected  work never makes it to the larger research community.', preview:'images/shapeLibrary/cisco-44px.png', recommended: 'false', example1:'images/examples/cisco1.png', example2:'images/examples/cisco2.png', example3:'images/examples/cisco3.png',example4:'images/examples/cisco4.png', details:'Cisco network icons are globally recognized symbols for diagramming network architecture. Use our standard shape set to model nodes and connections in a computer network.'}, 
                    {name:'Funding facilitation',  icon:'lock', short: 'Only involving a few individuals in peer review often leads to a slow, biased process. Subjectively rejected  work never makes it to the larger research community.', preview:'images/shapeLibrary/cisco-44px.png', recommended: 'false', example1:'images/examples/cisco1.png', example2:'images/examples/cisco2.png', example3:'images/examples/cisco3.png',example4:'images/examples/cisco4.png', details:'Cisco network icons are globally recognized symbols for diagramming network architecture. Use our standard shape set to model nodes and connections in a computer network.'}, 
                ];



                $scope.myInterval = 3000;
                  $scope.slides = [
                    {
                      image: 'http://lorempixel.com/400/200/'
                    },
                    {
                      image: 'http://lorempixel.com/400/200/food'
                    },
                    {
                      image: 'http://lorempixel.com/400/200/sports'
                    },
                    {
                      image: 'http://lorempixel.com/400/200/people'
                    }
                  ];
    });






                