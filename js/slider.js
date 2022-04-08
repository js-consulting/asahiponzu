const swiper = new Swiper(".swiper-container", {
  loop: true,
  autoplay: {
    delay: 4000,
  },
  speed: 2000,
  effect: 'fade',
  // ページネーションが必要なら追加
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	}
});
