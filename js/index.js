$(function(){
	/*$(window).on('orientationchange',function(){
		var output = '<h1>Orientation</h1>';
		switch (window.orientation)
		{
		case 0:
			break;
		case -90:
			break;
		case 90:
			break;
		case 180:
			break;
		}
	})*/
	
	$('#mb3').click(function(){
		$('#nav1').animate({
			'height':'300px',
			'width':'930px'
		},700)
		$('#nav1').css({
			'display':'block'
		})
		$('#mb1').animate({
			'left':'465px'
		},700)
		$('#mb2').stop(true,false)
		$('#nav2').stop(true,false)	
		$('#nav2').animate({
			'width':'0px',
			'height':'0px'
		},700)
		$('#nav2').css({
			'display':'none',
		})
		$('#mb2').animate({
			'top':'75px'
		},700)	
		$('.mb2t').stop(true,false)
		$('.mb2t').animate({
			'opacity':'0.0'
		},1)		
		$('.mb1t').animate({
			'opacity':'1'
		},4700)
	})

	$('#mb1').click(function(){
		$('#nav1').animate({
			'height':'0px',
			'width':'0px'
		},700)
		$('#mb1').animate({
			'left':'-565px'
		},700)
		$('#nav1').css({
			'display':'none'
		})
		$('.mb1t').stop(true,false)
		$('.mb1t').animate({
			'opacity':'0.0'
		},1)	
	})

	
	$('#mb3').dblclick(function(){
		$('#nav2').animate({
			'width':'200px',
			'height':'550px'
			},700)
		$('#nav2').css({
			'display':'block'
		})
			$('#mb2').animate({
			'top':'640px'
			},700)
		$('#mb1').stop(true,false)
		$('#nav1').css({
			'display':'none'
		})
		$('#nav1').stop(true,false)	
		$('#nav1').animate({
			'height':'0px',
			'width':'0px'
		},700)
		$('#mb1').animate({
			'left':'-565px'
		},700)
		$('.mb1t').stop(true,false)
		$('.mb1t').animate({
			'opacity':'0.0'
		},1)		
		$('.mb2t').animate({
			'opacity':'1'
		},4700)	
	})	

	$('#mb3').on('touchmove',(function(){
		$('#nav2').animate({
			'width':'200px',
			'height':'550px'
			},700)
		$('#nav2').css({
			'display':'block'
		})
			$('#mb2').animate({
			'top':'640px'
			},700)
		$('#mb1').stop(true,false)
		$('#nav1').css({
			'display':'none'
		})
		$('#nav1').stop(true,false)	
		$('#nav1').animate({
			'height':'0px',
			'width':'0px'
		},700)
		$('#mb1').animate({
			'left':'-565px'
		},700)
		$('.mb1t').stop(true,false)
		$('.mb1t').animate({
			'opacity':'0.0'
		},1)		
		$('.mb2t').animate({
			'opacity':'1'
		},4700)	
	}))
	
			
	$('#mb2').click(function(){
		$('#nav2').animate({
			'display':'0',
			'height':'0'
		},1000)
		$('#nav2').css({
			'display':'none'
		})			
		$('#mb2').animate({
			'top':'75px'
		},700)
		$('.mb2t').stop(true,false)
		$('.mb2t').animate({
			'opacity':'0.0'
		},1)			
	})

	$('.contbtn3').click(function(){
		$('.p1-1').stop().animate({'left':'-2100px'},500)
		$('.p1-2').stop().animate({'left':'-2100px'},500)
		$('.contbtn2-1').stop().animate({'opacity':'0','z-index':'0'},500)
		$('.contbtn2-2').stop().animate({'opacity':'0','z-index':'0'},500)
		$('.contbtn1-1').stop().animate({'opacity':'1','z-index':'2'},500)
		$('.contbtn1-2').stop().animate({'opacity':'1','z-index':'2'},500)
		$('.contbtn3').animate({'opacity':'0','z-index':'0'},200)	
		$('.contbtn4').animate({'opacity':'1','z-index':'3'},200)		
	})
	$('.contbtn4').click(function(){
		$('.p1-1').stop().animate({'left':'-700px'},500)	
		$('.p1-2').stop().animate({'left':'-700px'},500)
		$('.contbtn2-1').stop().animate({'opacity':'1','z-index':'2'},500)
		$('.contbtn2-2').stop().animate({'opacity':'1','z-index':'2'},500)
		$('.contbtn1-1').stop().animate({'opacity':'0','z-index':'0'},500)
		$('.contbtn1-2').stop().animate({'opacity':'0','z-index':'0'},500)
		$('.contbtn3').animate({'opacity':'1','z-index':'3'},200)
		$('.contbtn4').animate({'opacity':'0','z-index':'0'},200)		
	})
	$('.contbtn3').mouseover(function(){
		$('.contbtn2-1 img').attr('src','images/main/btn1-1.png')
		$('.contbtn2-2 img').attr('src','images/main/btn1-2.png')
		$('.contbtn2-1').animate({'left':'650'},200)
	})
	$('.contbtn4').mouseover(function(){
		$('.contbtn1-1 img').attr('src','images/main/btn1-1.png')
		$('.contbtn1-2 img').attr('src','images/main/btn1-2.png')
		$('.contbtn1-2').animate({'left':'675'},200)
	})
	$('.contbtn3').mouseout(function(){
		$('.contbtn2-1 img').attr('src','images/main/btn2-1.png')
		$('.contbtn2-2 img').attr('src','images/main/btn2-2.png')
		$('.contbtn2-1').animate({'left':'660'},200)
	})
	$('.contbtn4').mouseout(function(){
		$('.contbtn1-1 img').attr('src','images/main/btn2-1.png')
		$('.contbtn1-2 img').attr('src','images/main/btn2-2.png')
		$('.contbtn1-2').animate({'left':'665'},200)
	})

	$('.menubtn1').click(function(){
		/*$('.menubtn1').css({'display':'none'})
		$('.menubtn2').css({'display':'block'})*/
		$('.menubtn1').animate({'opacity':'0','z-index':'0'},500)
		$('.menubtn2').animate({'opacity':'1','z-index':'1'},500)
		$('#menul').animate({'opacity':'0','z-index':'0'},500)
		$('#menur').animate({'opacity':'1','z-index':'1'},500)
		/*$('#menur').css({'display':'block'})
		$('#menul').css({'display':'none'})*/
	})
	
	$('.menubtn2').click(function(){
		/*$('.menubtn2').css({'display':'none'})
		$('.menubtn1').css({'display':'block'})*/
		$('.menubtn1').animate({'opacity':'1','z-index':'1'},500)
		$('.menubtn2').animate({'opacity':'0','z-index':'0'},500)
		$('#menul').animate({'opacity':'1','z-index':'1'},500)
		$('#menur').animate({'opacity':'0','z-index':'0'},500)
		/*$('#menul').css({'display':'block'})
		$('#menur').css({'display':'none'})*/
	})
	$('.menubtn1').mouseover(function(){
		$('.menubtn1 img').attr('src','images/main/bttn3.png')
	})
	$('.menubtn1').mouseout(function(){
		$('.menubtn1 img').attr('src','images/main/bttn1.png')		
	})
	$('.menubtn2').mouseover(function(){
		$('.menubtn2 img').attr('src','images/main/bttn3.png')		
	})
	$('.menubtn2').mouseout(function(){
		$('.menubtn2 img').attr('src','images/main/bttn1.png')		
	})

	$('.shopbtn3').click(function(){
		$('.suyu').stop().animate({'left':'-2100px'},500)	
		$('.hyehwa').stop().animate({'left':'-700px'},500)			
		$('.btnp').stop().animate({'left':'-750px'},500)
	})
	$('.shopbtn4').click(function(){
		$('.suyu').stop().animate({'left':'-700px'},500)	
		$('.hyehwa').stop().animate({'left':'700px'},500)
		$('.btnp').stop().animate({'left':'650px'},500)
	})
	$('.shopbtn3').mouseover(function(){
		$('.shopbtn1-1 img').stop().attr('src','images/main/btn3-1.png')
		$('.shopbtn1-2 img').stop().attr('src','images/main/btn3-2.png')
		$('.btnp').css({'background':'#fff'})
		$('.shopbtn1-2 img').stop().animate({'left':'0px'},200)		
	})
	$('.shopbtn3').mouseout(function(){
		$('.shopbtn1-1 img').stop().attr('src','images/main/btn2-1.png')
		$('.shopbtn1-2 img').stop().attr('src','images/main/btn2-2.png')
		$('.btnp').css({'background':'#000'})
		$('.shopbtn1-2 img').stop().animate({'left':'10px'},200)	
	})
	$('.shopbtn4').mouseover(function(){
		$('.shopbtn2-1 img').stop().attr('src','images/main/btn3-1.png')
		$('.shopbtn2-2 img').stop().attr('src','images/main/btn3-2.png')
		$('.btnp').css({'background':'#fff'})
		$('.shopbtn2-2 img').stop().animate({'left':'25px'},200)		
	})
	$('.shopbtn4').mouseout(function(){
		$('.shopbtn2-1 img').stop().attr('src','images/main/btn2-1.png')
		$('.shopbtn2-2 img').stop().attr('src','images/main/btn2-2.png')
		$('.btnp').css({'background':'#000'})
		$('.shopbtn2-2 img').stop().animate({'left':'15px'},200)
	})
	$('.suyu .ptxt').mouseover(function(){
		$('.suyu .stxt p').css({'border-bottom':'5px solid red'})
	});

	$('.suyu .ptxt').mouseout(function(){
		$('.suyu .stxt p').css({'border-bottom':'0px solid red'})
	});
	$('.hyehwa .ptxt').mouseover(function(){
		$('.hyehwa .htxt p').css({'border-bottom':'5px solid red'})
	});

	$('.hyehwa .ptxt').mouseout(function(){
		$('.hyehwa .htxt p').css({'border-bottom':'0px solid red'})
	});

	$('.nav-ul').children('div').children('li').children('a').click(function(){
		//console.log($(this).parent().index()+"  - out")
		if($(this).parent('li').index()==0){
			//console.log($(this).parent().index()+"  - in")
			$('body, html').stop().animate({scrollTop:$('section').children('article:eq(0)').offset().top},300);
		}else if($(this).parent('li').index()==1){
			//console.log($(this).parent().index()+"  - in")
			$('body, html').stop().animate({scrollTop:$('section').children('article:eq(1)').offset().top},300);
		}else if($(this).parent('li').index()==2){
			//console.log($(this).parent().index()+"  - in")
			$('body, html').stop().animate({scrollTop:$('section').children('article:eq(2)').offset().top},300);
		}else if($(this).parent('li').index()==3){
			//console.log($(this).parent().index()+"  - in")
			$('body, html').stop().animate({scrollTop:$('section').children('article:eq(3)').offset().top},300);
		}
	});

	$('.topbtn, .topbtn a').on('click keydown',function(e){
		if (e.type=='click')
		{
			$('body, html').stop().animate({scrollTop:$("body").offset().top},200);
		}else if (e.type=='keydown')
		{
			if (e.which==13)
			{
				$('body, html').stop().animate({scrollTop:$("body").offset().top},200);

			}
		}
	});

	// $('#over1').mouseover(function(){
	// 	$('#mt1 li').css({'display':'block'})
	// })
	// $('#over1').mouseout(function(){
	// 	$('#mt1 li').css({'display':'none'})
	// })
	
	// 	$('#over2').mouseover(function(){
	// 	$('#mt2 li').css({'display':'block'})
	// })
	// $('#over2').mouseout(function(){
	// 	$('#mt2 li').css({'display':'none'})
	// })
		
	// 	$('#over3').mouseover(function(){
	// 	$('#mt3 li').css({'display':'block'})
	// })
	// $('#over3').mouseout(function(){
	// 	$('#mt3 li').css({'display':'none'})
	// })
	
	// 	$('#over4').mouseover(function(){
	// 	$('#mt4 li').css({'display':'block'})
	// })
	// $('#over4').mouseout(function(){
	// 	$('#mt4 li').css({'display':'none'})
	// })



	// $('.stxt2').mouseover(function(){
	// 	$('.stxt2').css({'color':'#fff','transform':'rotate(0deg)'})
	// 	$('.stxt2').animate({'width':'230px','top':'90px','left':'-190px','font-size':'16px'},300)
	// });

	// $('.stxt2').mouseout(function(){
	// 	$('.stxt2').css({'color':'#532c0c','transform':'rotate(-40deg)'})
	// 	$('.stxt2').animate({'width':'300px','top':'103px','left':'-220px','font-size':'15px'},300)	
	// });

	// // a 의 href 속성이 # 일 경우 클릭 시 위로 튕기는 현상 방지
	// $('a[href=#]').click(function(e){
	// 	e.preventDefault();
	// });
	// // GNB 오파시티(애니메이션 효과)
	// $('#nav1 > li ul').css({'opacity':'0'}); // 구형버전의 IE를 위해 자바스크립트에서 opacity 초기값 선언
	// $('#nav1 > li > a').on('mouseenter focusin', function(){
	// 	var index = $('#nav1 > li > a').index(this);
	// 	$('#nav1 > li ul').css({'display':'none', 'opacity':'0'});
	// 	$('#nav1 > li').removeClass('on');
	// 	$('#nav1 > li:eq('+ index +') ul').css({'display':'block'});
	// 	$('#nav1 > li:eq('+ index +') ul').stop().animate({'opacity':'1'}, 500);
	// 	$('#nav1 > li:eq('+ index +')').addClass('on');
	// });
	// $('#nav1').on('mouseleave focusout', function(){
	// 	$('#nav1 > li ul').css({'opacity':'0'});
	// 	$('#nav1 > li ul').css({'display':'none'});
	// 	$('#nav1 > li').removeClass('on');
	// });



	// $	var go = $(this).attr("href");
	// 	scrollup = $('section article:eq(0)');
	// 	scrolldown = $('section article:eq(1)');
	// 	$('ul li a').click(function(){
	// 		$(go).animate({'section article:eq(""'-1')'},1000)
	// 	scrolldown.animate({'section article:eq(""'++1')'},1000)		
		
	// 	$(go).stop().animate({},1000)
    //    return false;
	// });


	// $('ul li a').click(function(){
	// 	var go = $(this).attr("href")
	// 	$(go).animate(function({attr(go)},1000))
	// });

	
	// $('#thumb a').click(function(){
	// 	var p = $(this).attr("href");
	// 		$('.ps').text(p);
	// 		$('#big img').attr("src",p);//변수 p를 세팅하기 위한 역할-attr은 세팅의 역할도 있음.
	// 		$('#big img').css("opacity","0").stop().animate({
	// 			"opacity":"1"
	// 		},1000);
	// 		return false;//href 의 링크값을 거짓으로 만들어 'big'안에 실행 되도록 만든 것.
	// 	});




	// $('#click2').click(function(){
	// 	$('#ms2 li').toggle()
	// })

	// $('#click3').click(function(){
	// 	$('#ms3 li').toggle()
	// })

	// $('#click4').click(function(){
	// 	$('#ms4 li').toggle()
	// })

});