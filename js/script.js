		var formOpen = document.querySelector(".form-title");
		var popup = document.querySelector(".form-search__form");

		formOpen.addEventListener("click", function(event)	{
			event.preventDefault();
			popup.classList.toggle("form-search__form-show");
		});

		window.addEventListener("keydown", function(event) {
			if (event.keyCode == 27) {
				if (popup.classList.contains("form-search__form-show")) {
					popup.classList.remove("form-search__form-show");
				}
			}
		});