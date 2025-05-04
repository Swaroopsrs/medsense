function Calculatedays() {
  let morning = parseFloat(document.getElementById('morning').value);
  let afternoon = parseFloat(document.getElementById('afternoon').value);
  let evening = parseFloat(document.getElementById('evening').value);
  let night = parseFloat(document.getElementById('night').value);
  
  let total = parseFloat(document.getElementById('total').value);

  if (!morning || !evening || !afternoon || !night || morning <= 0 || afternoon <= 0 || evening <= 0 || night<= 0 || !total || total <= 0 ) {
    document.getElementById('heading').innerHTML = 'Please enter valid quantities and total tablets.';
    return;
  }

  let daily = (morning + afternoon + evening + night );
  let tablets_runout_after  = (total / daily)

  document.getElementById('heading').innerHTML = 'your tablet will last for  ';
  document.getElementById('output').innerHTML = tablets_runout_after.toFixed(2) + "days";
  
  alert("Your tablets will run out in " + tablets_runout_after.toFixed(2) + " days.");
  
}
function reloadPage() {
        window.location.reload();
}

