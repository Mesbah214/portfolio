function submitForm() {
    const form = document.getElementById('custom-form')
    const success = document.getElementById('success')

    form.style.display = 'none'
    success.style.display = 'block'

    const formData = new FormData(form)
    const url = 'https://formsubmit.co/087f50430227d91717ae16a42b37c9f4'
    fetch(url, {
        method: 'POST',
        body: formData,
    })

    return false
}
