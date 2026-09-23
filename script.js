$(function () {
    $('.ajax-modal').on('click', function () {
        const file = $(this).data('file');
        $('#modal').css('display', 'flex');
        $.ajax({
            url: file,
            success: function (data) {
                $('#modalBox').html(data + '<button class="close" onclick="closeModal()">×</button>');
            },
            error: function () {
                $('#modalBox').html('<h2>Order Information</h2><p>Thank you for choosing Donutella!</p><button class="close" onclick="closeModal()">×</button>');
            }
        });
    });

    $('.toast-btn').on('click', function () {
        showToast($(this).data('message') || 'Thank you!');
    });

    $('#contactForm').on('submit', function (e) {
        e.preventDefault();
        showToast('Your message has been sent!');
        this.reset();
    });

    $('#registerForm').on('submit', function (e) {
        e.preventDefault();
        let p = $('#password').val();
        let c = $('#confirmPassword').val();

        if (p.length < 6) {
            $('#formMsg').text('Password must be at least 6 characters.').attr('class', 'error');
            return;
        }
        if (p !== c) {
            $('#formMsg').text('Passwords do not match.').attr('class', 'error');
            return;
        }
        $('#formMsg').text('Account created successfully!').attr('class', 'success');
        showToast('Account created successfully!');
    });

    $('#loginForm').on('submit', function (e) {
        e.preventDefault();
        if (this.checkValidity()) {
            showToast('Login successful!');
        } else {
            this.reportValidity();
        }
    });
});

function closeModal() {
    $('#modal').fadeOut();
}

function showToast(message) {
    $('.toast').stop(true, true).text(message).fadeIn().delay(2200).fadeOut();
}
