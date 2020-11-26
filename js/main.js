	$(document).ready(function (event) {
		$("#search_form").submit(function(event){
			$("#need2hide").fadeOut();
			event.preventDefault();

			var movie = $("#search_text").val();

			var url = "https://www.omdbapi.com?apikey=ea49aac1";

			$.ajax({
					method: 'GET',
					url: url+"&s="+movie,
					success: function (data) {
						console.log(data)
						console.log(data.Search);

						var ifmovie = (data.Response);

						if(ifmovie == "False"){alert("No Movie Available!");

						message = `<div class="container"><div class="well">
										<h2 class="text-center">Sorry &#128562; No Movie Found !</h2>
										<h3>Try to Search with another keyword!</h3>
										<h3>You have not typed movie name</h3>
									</div></div>`;

						$("#movie_list").html(message);

					}


						
						var arr = data.Search;
						var string = "";

						for(var m = 0; m<arr.length; m++) {
							console.log(arr[m].Title);

							string += `
						<div class="col-lg-3 col-xs-10 col-lg-offset-0 col-xs-offset-1" style="margin-top: 20px;">
						<div class="well text-center">
						<img src="${arr[m].Poster}" alt="Sorry! Poster Could Not Found" onerror="this.onerror=null; this.src='assets/not_available.png'">
						<div style="height: 16px; padding: 20px 0px; overflow:hidden;">
							<p>${arr[m].Title}</p>
						</div>
						
						<div class="text-center"><a href="movie_details.html?movie_id=${arr[m].imdbID}" type="button" class="btn btn-info">View More!</a></div>
						</div>
						</div>

							`;	

						}

						$("#movie_list").html(string);

					}

				});//*ajax process end

			//load more 10 movies
			$.ajax({
					method: 'GET',
					url: url+"&s="+movie+"&page=2",
					success: function (data) {
						console.log(data);
						console.log(data.Search);

												
						var arr = data.Search;
						var string2 = "";

						for(var m = 0; m<arr.length; m++) {
							console.log(arr[m].Title);

							string2 += `
						<div class="col-lg-3 col-xs-10 col-lg-offset-0 col-xs-offset-1" style="margin-top: 20px;">
						<div class="well text-center">
						<img src="${arr[m].Poster}" alt="Sorry! Poster Could Not Found" onerror="this.onerror=null; this.src='assets/not_available.png'">
						<div style="height: 16px; padding: 20px 0px; overflow:hidden;">
							<p>${arr[m].Title}</p>
						</div>
						
						<div class="text-center"><a href="movie_details.html?movie_id=${arr[m].imdbID}" type="button" class="btn btn-info">View More!</a></div>
						</div>
						</div>

							`;	

						}

						$("#movie_list").append(string2);

					}

				});/*ajax process end*/


			//load more 10 movies
			$.ajax({
					method: 'GET',
					url: url+"&s="+movie+"&page=3",
					success: function (data) {
						console.log(data);
						console.log(data.Search);

												
						var arr = data.Search;
						var string3 = "";

						for(var m = 0; m<arr.length; m++) {
							console.log(arr[m].Title);

							string3 += `
						<div class="col-lg-3 col-xs-10 col-lg-offset-0 col-xs-offset-1" style="margin-top: 20px;">
						<div class="well text-center">
						<img src="${arr[m].Poster}" alt="Sorry! Poster Could Not Found" onerror="this.onerror=null; this.src='assets/not_available.png'">
						<div style="height: 16px; padding: 20px 0px; overflow:hidden;">
							<p>${arr[m].Title}</p>
						</div>
						
						<div class="text-center"><a href="movie_details.html?movie_id=${arr[m].imdbID}" type="button" class="btn btn-info">View More!</a></div>
						</div>
						</div>

							`;	

						}

						$("#movie_list").append(string3);

					}

				});//*ajax process end

			$.ajax({
					method: 'GET',
					url: url+"&s="+movie+"&page=4",
					success: function (data) {
						console.log(data);
						console.log(data.Search);

												
						var arr = data.Search;
						var string4 = "";

						for(var m = 0; m<arr.length; m++) {
							console.log(arr[m].Title);

							string4 += `
						<div class="col-lg-3 col-xs-10 col-lg-offset-0 col-xs-offset-1" style="margin-top: 20px;">
						<div class="well text-center">
						<img src="${arr[m].Poster}" alt="Sorry! Poster Could Not Found" onerror="this.onerror=null; this.src='assets/not_available.png'">
						<div style="height: 16px; padding: 20px 0px; overflow:hidden;">
							<p>${arr[m].Title}</p>
						</div>
						
						<div class="text-center"><a href="movie_details.html?movie_id=${arr[m].imdbID}" type="button" class="btn btn-info">View More!</a></div>
						</div>
						</div>

							`;	

						}

						$("#movie_list").append(string4);

					}

				});//*ajax process end


				$.ajax({
						method: 'GET',
						url: url+"&s="+movie+"&page=5",
						success: function (data) {
							console.log(data);
							console.log(data.Search);

													
							var arr = data.Search;
							var string4 = "";

							for(var m = 0; m<arr.length; m++) {
								console.log(arr[m].Title);

								string5 += `
							<div class="col-lg-3 col-xs-10 col-lg-offset-0 col-xs-offset-1" style="margin-top: 20px;">
							<div class="well text-center">
							<img src="${arr[m].Poster}" alt="Sorry! Poster Could Not Found" onerror="this.onerror=null; this.src='assets/not_available.png'">
							<div style="height: 16px; padding: 20px 0px; overflow:hidden;">
								<p>${arr[m].Title}</p>
							</div>
							
							<div class="text-center"><a href="movie_details.html?movie_id=${arr[m].imdbID}" type="button" class="btn btn-info">View More!</a></div>
							</div>
							</div>

								`;	

							}

							$("#movie_list").append(string5);

						}

					});//*ajax process end

			
		});/*form submit end*/


		
	});





