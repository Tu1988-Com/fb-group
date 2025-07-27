$(document).ready(function () {
	// Handle "Like", "Comment", "Share" button
	$(".post-action-btn").on("click", function () {
		const action = $(this).data("action");
		const buttonText = $(this).text().trim();

		switch (action) {
			case "like":
				// Check "like button" like or not
				if ($(this).hasClass("liked")) {
					$(this)
						.removeClass("liked text-primary")
						.html('<i class="fas fa-thumbs-up me-2"></i>Thích');
					// Reduce Like
					const likesSpan = $(this)
						.closest(".card-body")
						.find(".fa-thumbs-up")
						.parent();
					let currentLikes = parseInt(
						likesSpan.text().replace(/\D/g, ""),
					);
					likesSpan.html(
						`<i class="fas fa-thumbs-up text-primary"></i> ${currentLikes - 1}`,
					);
				} else {
					$(this)
						.addClass("liked text-primary")
						.html('<i class="fas fa-thumbs-up me-2"></i>Đã thích');
					// Increase Like
					const likesSpan = $(this)
						.closest(".card-body")
						.find(".fa-thumbs-up")
						.parent();
					let currentLikes = parseInt(
						likesSpan.text().replace(/\D/g, ""),
					);
					likesSpan.html(
						`<i class="fas fa-thumbs-up text-primary"></i> ${currentLikes + 1}`,
					);
				}
				break;
			case "comment":
				alert("You has clicked comment!");
				break;
			case "share":
				alert("You has click share");
				break;
			default:
				break;
		}
	});

	// Xử lý popup/modal khi nhấp vào nút "Mời bạn bè"
	$("#showPopupBtn").on("click", function () {
		$("#myModal").modal("show"); // Hiển thị modal
	});

	// Ví dụ về cách xử lý sự kiện khi modal đóng (nếu cần)
	$("#myModal").on("hidden.bs.modal", function (e) {
		console.log("Modal đã đóng.");
		// Có thể reset form hoặc thực hiện các hành động khác ở đây
	});

	// Bạn có thể thêm các chức năng jQuery khác ở đây, ví dụ:
	// - Xử lý gửi bài viết mới
	// - Tải thêm bài viết khi cuộn xuống (infinite scroll)
	// - Chuyển đổi giữa các tab nếu bạn thêm phần tabbed content
});
