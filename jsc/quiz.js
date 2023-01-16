






function result() {
  var correct = 0;
  if(document.getElementById('correct1').checked)
		{	correct++;
		}
	if(document.getElementById('correct2').checked)
		{	correct++;
		}
	if(document.getElementById('correct3').checked)
		{	correct++;
		}

    if(document.getElementById('correct4').checked)
		{	correct++;
		}

    if(document.getElementById('correct5').checked)
		{	correct++;
		}

    if(document.getElementById('correct6').checked)
		{	correct++;
		}

    alert("le nombre de reponce correct est: "+correct);
  }


