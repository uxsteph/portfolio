// // 1

// $('#content-1').click(
// 	function() {
// 		$('#moreinfo1').slideToggle("normal");
// // // 		$('.arrow1').toggleClass('active');
// });

// // // 2
// $('#content-2').click(
// 	function() {
// 		$('#moreinfo2').slideToggle("normal");
// // 		$('.arrow2').toggleClass('active');
// });

// // // 3
// $('#content-3').click(
// 	function() {
// 		$('#moreinfo3').slideToggle();
// // 		$('.arrow3').toggleClass('active');
// });

// // // 4
// $('#content-4').click(
// 	function() {
// 		$('#moreinfo4').slideToggle();
// // 		$('.arrow4').toggleClass('active');
// });

// // // 5
// $('#content-5').click(
// 	function() {
// 		$('#moreinfo5').slideToggle();
// // 		$('.arrow5').toggleClass('active');
// });

$('.arrow1').click(
	function() {
		$('.arrow1').toggleClass('active');
		$('#moreinfo1').slideToggle();
		$('#moreinfo2').slideToggle();
		$('#moreinfo3').slideToggle();
		$('#moreinfo4').slideToggle();
		$('#moreinfo5').slideToggle();
});