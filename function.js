function sum() {
	//tat ca tuong tac giua js va html deu thong qua 1 ma goi la id
	//lay gia tri 1 su dung jquery, voi id duoc get tu ben html qua the input
	let value_1 = $("#GT1").val();
	let value_2 = $("#GT2").val();
	
	//set gia tri lai cho o ket qua thong qua id
	let result = Number(value_1)  +  Number(value_2);
	
	//ham nay se set value thong qua ID cua the html, ung dung co the auto set value cho textbox theo id
	$("#KQ").val(result);
}

function loadWebsite() {
	//lay link website muon load
	let address = $('#address').val();
	
	//doan config nay duoc su dung khi ma dung ajax ko load lai trang, nham tranh loi neu ko co doan nay
	//thi cu load 10 website se thay giao dien bi loi do va phai reload lai
	$.ajaxPrefilter(function(options, original_Options, jqXHR) {
		options.async = true;
	});
	
	//ham GET su dung ajax chu y dataType: phai cau hinh dung neu dung application/json se tra ve 
	//data la json do minh dung data tra ve la html nen cau hinh la html
	$.ajax({
		url : address, //dia chi se GEt request
		dataType : 'html', //loai gia tri nhan ve la html co the do de xem tac dung (text, json)
		type : 'GET', //loai action GET, POST, OPTION, DELETE, UPDATE
		contentType : 'text/html', //header transfer data,
		timeout : 60000, //nen de timeout
		async : true,
		processData : false,
		success : function(data, textStatus, jQxhr) {
			//neu request thanh cong se nhay vao day
			//tai noi dung html nhan duoc khi load web vao the div qua id su dung html
			$('#pageContent').html(data);
		},
		error : function(jqXhr, textStatus, errorThrown) {
			//neu request that bai se nhay vao day
			//thong bao loi ra man hinh qua id
			$('#pageContent').html('loi khi tai trang');
		}
	});
}

function autoSumRandom() {
	$("#GT1").val(Math.random());
	$("#GT2").val(Math.random());
	
	sum();
}

function setValueById(id,value) {
	$('#'+id).val(value);
}