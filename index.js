// Code your solution here:
function driversWithRevenueOver(driver, revenue){
    return driver.filter(function (d){return d.revenue > revenue})
}
function driverNamesWithRevenueOver(driver, revenue){
    const drivers = driver.filter(function (d){return d.revenue > revenue})
    
    return drivers.map(function(d){return d.name})

    }

function exactMatch(driver, object){
    return driver.filter(function(d){return d[Object.keys(object)[0]] === Object.values(object)[0]})
}

function exactMatchToList(driver, object){
    return driver.filter(function(d){return d[Object.keys(object)[0]] === Object.values(object)[0]}).map(function(d){return d.name})
}