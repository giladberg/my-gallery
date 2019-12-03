'use strict'

var gPortfolio;


function loadData() {
     createPortfolio()
}

function createPortfolio(){
    gPortfolio=[]
    gPortfolio.push(createProject('Social NetWork','mini linkedin project','CLIENT: html, java script (es6), css (sass), react, redux SERVER: nodejs, mongodb, express, jwt.',
    'https://gilad-bergmann-social-network.herokuapp.com/',new Date(2019, 5, 24).getTime(),["linkedin","social network","jobs"],'social-network.jpg'))
    gPortfolio.push(createProject('Snake','snake game','CLIENT: html (canvas), java script, css  SERVER: nodejs, mongodb, express',
    'https://gilad-bergmann-snake.herokuapp.com/',new Date(2019, 5, 12).getTime(),["snake","game","old shcools"],'snake.jpg'))
    gPortfolio.push(createProject('Cinema Library','Movies cinema info','CLIENT: html, java script (es6), css, bootstrap, react, redux, omdb api SERVER: no server side',
    'http://cinema-gilad-bergmann.herokuapp.com/',new Date(2019, 2, 15).getTime(),["cinema","imdb","movies"],'cinema.jpg'))
    gPortfolio.push(createProject('Mine-Sweeper','mine sweeper game','CLIENT: html,css,js SERVER: no server side',
    'https://giladberg.github.io/mine-sweeper/',new Date(2019, 11, 12).getTime(),["mine-sweeper","game","old shcools"],'mine-sweeper.jpg'))
}

function createProject(name,title,desc,url,publishedAt,labels,imgUrl) {
    var project = {
        id:getRandomID(),
        name,
        title,
        desc,
        url,
        publishedAt,
        labels,
        imgUrl
    }
    return project
}

function getPortfolioToRender(){
    return gPortfolio
}

function findBookById(projectId) {
    return gPortfolio.find(function (project) {
        return project.id === projectId
    });
}

function sendEmail(email,subject,content){
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${content} `, '_blank');

}
 
