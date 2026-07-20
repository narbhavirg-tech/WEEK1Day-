function launchBrowser(browserName){
    if(browserName.toLowerCase() === "chrome"){
        console.log(" Launching Chrome browser");
    }
    else{
        console.log(" Launching "+ browserName + " browser");
    }

}

function runTests(testType){
 switch(testType.toLowerCase()){
    case "smoke":
        console.log("Running Smoke tests");
        break;
    case "sanity":
        console.log("Running Sanity tests");
        break;
    case "regression":
        console.log("Running Regression tests" );
        break;
    default:
        console.log("Running Smoke tests");
        break;    
 }
}


let browserName1= "chrome", browserName2 = "SAFARI";
launchBrowser(browserName1);
launchBrowser(browserName2);

let testType1 = "smoke", testType2 = "regression",testType3 = "SANITY" , testType4 = "unit";
runTests(testType1) ;
runTests(testType2) ;
runTests(testType3) ;
runTests(testType4) ;



