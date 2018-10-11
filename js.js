 var questionsEasy   =[];
 var questionsMedium =[];
 var questionsHard   =[];
 var allQuestions    =[];
 var users           =[];
 var form            =[];
 var correctAnswer   =[];
 var idSelect        =[];
 var degree          ='e';


//ready function 
$(document).ready(function () {	
$('audio').hide();
$('body').css('background-image', 'url("1.jpg")')
$('.s1').hide();
$('#eazy').hide();
$('#timer').hide()
$('#Medium').hide()
$('#Hard').hide()

$('#b1').on('click',function(){
	$('.s0').hide();
	$('body').css('background-size',"cover")
	$('body').css('background-image',"url(2.jpg)")
	$('#eazy').show();

})
$('#b2').on('click',function(){
	$('.s0').hide();
	$('body').css('background-size',"cover")
	$('body').css('background-image',"url(2.jpg)")
	$('#Medium').show();
	degree='m';

})
$('#b3').on('click',function(){
	$('.s0').hide();
	$('body').css('background-size',"cover")
	$('body').css('background-image',"url(2.jpg)")
	$('#Hard').show()
	degree='h';

})



// Eazy form 

$('#b4').on('click',function(){
degree='e';	
$('body').css('background-image', '')
$('body').css('background-color', '#3D9970')
$('#eazy').hide();
$('.s1').show();

select();
printForm();
var a=30;
var x=setInterval(function(){
	$('#timer').show()
	$('#timer').text('00:'+a);
	    var soundObject = $('#tick').get(0);
        soundObject.src = "tick.mp3";
        soundObject.volume = 0.3;
        soundObject.autoPlay = false;
        soundObject.preLoad = true;
        soundObject.controls = true;
	a--;
	if(a===-1){
		clearInterval(x);
		x1();
		 $('#result').prop('disabled', true);
		

	}

},1000)

$('#result').on('click',function(){
	var result=0;
	var array=$(':radio:checked');
	if(array.length<5){
		alert('coplete the question')
		return;
	}

clearInterval(x);

	$.each(array,function(index,value){
		if($(this).val()===correctAnswer[form[index].id]){
			result=result+20;
		}
	})

	alert( Math.ceil(result))
	$('#result').prop('disabled', true);

})


})


//Midum form
$('#b5,#b6').on('click',function(){
$('body').css('background-image', '')
$('body').css('background-color', '#3D9970')
$('#Medium').hide();
$('#Hard').hide();
$('.s1').show();

select();
printForm();
var a=30;
var x=setInterval(function(){
	$('#timer').show()
	$('#timer').text('00:'+a);
	    var soundObject = $('#tick').get(0);
        soundObject.src = "tick.mp3";
        soundObject.volume = 0.3;
        soundObject.autoPlay = false;
        soundObject.preLoad = true;
        soundObject.controls = true;
	a--;
	if(a===-1){
		
		clearInterval(x);
		x1();
	}

},1000)

$('#result').on('click',function(){
	var result=0;
	var array=$(':radio:checked');
	if(array.length<5){
		alert('coplete the question')
		return;
	}
clearInterval(x);

	$.each(array,function(index,value){
		if($(this).val()===correctAnswer[form[index].id]){
			result=result+20;
		}
	})

	alert( Math.ceil(result))

})


})








 





})


function x1(){

	var result=0;
	var array=$(':radio:checked');
	$.each(array,function(index,value){
		if($(this).val()===correctAnswer[form[index].id]){
			result=result+20;
		}
	})

	alert('Your result = '+ Math.ceil( result ));


}





 // create generate ID function 

function generateId(x){
	var start=x;
	return function (){
		return start++;
	}
}


// generate ID function count1

var count1=generateId(0);
var count2=generateId(0);

// add question to the array
function addQuestion(q,a1,a2,a3,c,level){
	var result={
		question : q,
		answer1  : a1,
		answer2  : a2,
		answer3  : a3,
		level    : level,
		id       : count1()

	}

		if(result.level.toLowerCase()==='h') {
			correctAnswer[result.id]=c;
			allQuestions.push(result);
			questionsHard.push(result);
			return 'Done'
		} else if(result.level.toLowerCase()==='m') {
			correctAnswer[result.id]=c;
			allQuestions.push(result);
			questionsMedium.push(result);
			return 'Done'
		} else if(result.level.toLowerCase()==='e') {
			correctAnswer[result.id]=c;
			allQuestions.push(result);
			questionsEasy.push(result);
			return 'Done'
		} else{
			return 'Wrong id should be E or M or H'
		}

}

//eazy
addQuestion('In which Movie would you hear the song \'Hakuna Matata\'?','Hart','Lion','Alone','Lion','e')
addQuestion('There are Movies based on the Harry Potter series ?','Mabye','No','Yes','Yes','e')
addQuestion('What is the color of the sky ?','Blue','Green','black','Blue','e')
addQuestion('Country Name ?','Jordan','Amman','Zarqa','Jordan','e')
addQuestion('Car Name ?','Lop','Nissan','ulk','Nissan','e')
addQuestion('Animal Name ?','Car','Door','Cat','Cat','e')

//Midume
addQuestion('chose the correct Answer \'120/2\'?','60','70','100','60','m')
addQuestion('The capetal of Jordan ?','Zarqr','Irbid','Amman','Amman','m')
addQuestion('What is the mening of rather ?','Run','Insted','Help','insted','m')
addQuestion('sea without fish ?','Dead Sea','Red Sea','white Sea','Dead Sea','m')
addQuestion('where is the Petra ?','Syria','Jordan','Iraq','Jordan','m')
addQuestion('Animal can\'t Fly ?','Checken','Bird','Eagle','Checken','m')

//Hard
addQuestion('chose the correct Answer \'120/2*2\'?','60','30','100','30','h')
addQuestion('105 + 104  ?','106','208','209','209','h')
addQuestion('The Dark Color ?','Black','Gray','Dark','Gray','h')
addQuestion('You can drink the revier water ?','Yes','No','Sometime','Yes','h')
addQuestion('A + 2 ?','A2','B','13','A2','h')
addQuestion('Best Anime','HXH','one pies','Kiji','HXH','h')


// add user 
function addUser(name,age) {
	var result={
		name     : name,
		age      : age,
		question : [],
		userId   : count2()

	}

	users.push(result);

}



// add chose question to the user 

function addChoseQuestion (answer,questionID,userID) {
	var result = {
		question   :'',
		answer     : answer,
		correct    : '',
		questionID :questionID
	}

	var find=0;
	var view='';

		$.each(allQuestions,function(id,value){
			if(value.id===questionID){
				result.correct=value.correct;
				result.question=value.question;
				find++;
			}
		})

		if (find>0){
			view = 'Done'
			$.each(users,function(id,value){
				if(value.userId===userID){
					value.question.push(result);
				}

			})

		} else {
			view = 'ID not found'
		}

return view;



}


//random id queation

function randomQuestion(){
	return Math.floor(Math.random()*allQuestions.length)
}

// select three question 

function select (){
	var x=0;
	while(x<=4){

		var s=randomQuestion();
			if(s !=idSelect[0] && s!=idSelect[1] && s!=idSelect[2] && s!=idSelect[3] && s!=idSelect[4]){
				if(degree==='e'){
					$.each(questionsEasy,function(index,value){
						if(value.id===s){
							form.push(value);
							idSelect.push(value.id);
							++x;
						}
					})
				} else if(degree==='m') {
					$.each(questionsMedium,function(index,value){
						if(value.id===s){
							form.push(value);
							idSelect.push(value.id);
							++x;
						}
					})

				}else if (degree==='h'){
						$.each(questionsHard,function(index,value){
							if(value.id===s){
								form.push(value);
								idSelect.push(value.id);
								++x;
							}
						})

				}
			}


	}
}

// print form 

function printForm(){
	$.each(form,function(index,value){
		var q='<p style="color:black;">'+value.question+'</p>'
		var c=' <label>'+'<input type="radio" name="A'+index+'" value="'+value.answer1+'">'+value.answer1+'</label>' +
		 ' <label id="l1" >'+'<input type="radio" name="A'+index+'" value="'+value.answer2+'">'+value.answer2+'</label>' +
		 ' <label>'+'<input type="radio" name="A'+index+'" value="'+value.answer3+'">'+value.answer3+'</label>'

		 $('.form').append('<div class="d1">'+(q+c)+'</div>');
	})
}