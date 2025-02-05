document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单默认提交行为

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you for your message, ${name}! We will contact you at ${email}.`);

    // 清空表单
    document.getElementById('contact-form').reset();
});