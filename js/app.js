class BoredActivity {

    //PROPTETRY/LOCALVARIABLE
    content ="";

    //FUNCTION 
    getNewActivity(url) {
        let ajax = new XMLHttpRequest();
        let scoped = this;
        ajax.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200) {
                let activityObject = JSON.parse(this.responseText);
                //go into object then key(key=.activity)
                document.getElementById("activity-text").innerHTML = activityObject.activity;
                scoped.content = activityObject.activity;
            }else if(this.readyState !=4) {
                document.getElementById("activity-text").innerHTML = "Loading";
            } else{
                document.getElementById("activity-text").innerHTML = "Error";
            }
        }
        ajax.open("GET", url, true);
        ajax.send();
    }
}

document.getElementById("get-activity-button").addEventListener("click", function() {
    let myActivity = new BoredActivity();
    myActivity.getNewActivity("http://www.boredapi.com/api/activity/");
});

document.getElementById("get-rec-activity-button").addEventListener("click", function() {
    let myActivity = new BoredActivity();
    myActivity.getNewActivity("http://www.boredapi.com/api/activity?type=recreational");
});