const myCarouselElement = document.querySelector('#myCarousel')
		const carousel = new bootstrap.Carousel(myCarouselElement, {
		  interval: 2000,
		  touch: false
		});

		// Получаем элементы модального окна и изображения
	  // let modal = document.getElementById("modal");
	  // let modalImage = document.getElementById("modal-image");

	  // Отображаем модальное окно и устанавливаем источник изображения
	  function displayModal(img)
	  {
	  		let modal = document.getElementById("modal");
			  let modalImage = document.getElementById("modal-image");
	      modal.style.display = "block";
	      modalImage.src = img.src;
	  }

	  // Скрываем содержимое модального окна, если пользователь кликнул вне его
	  function hideModal()
	  {  
	  	let modal = document.getElementById("modal");
	      if (event.target == modal) {
	          modal.style.display = "none";
	      }
	  }