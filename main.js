$(function(){

	$('#calendar').fullCalendar({
		// dayClick: function(){
		// 		alert('Работает!');
		// }
		theme: true,
		events: [
			{
				title: 'Событие 1',
				start: '2023-02-01'
			},
			{
				title: 'Событие 2',
				start: '2023-02-05'
			},
			{
				title: 'Событие 3',
				start: '2023-02-08'
			},
		],
	});

});