document.querySelector('#form')?.addEventListener('submit', (evt) => {
    evt.preventDefault()
    const formData = {}
    Array.from(evt.target.elements).filter(i => i.name).forEach(i => formData[i.name] = i.value)
  
  
    // https://smtpjs.com/ я честно хз как их настраивать можем созвониться, посмотреть, обычно у нас всегда для этого сервер был который делал.
    Email.send({
      Host: 'smtp.elasticemail.com',
      Username: 'soulwind199928@gmail.com',
      Password: '51479ED07038B3CAC4DF09547DB2F0B07537',
      To: 'soulwind199928@gmail.com',
      From: 'soulwind199928@gmail.com',
      Subject: 'Тестовый заголовок текста',
      Body: formData
    })
      .then(responseSendEmail)
      .catch(rejectSendEmail)
  
  })
  
  
  function responseSendEmail(response) {
    alert('Спасибо мы приняли ваши данные')
    window.location.reload()
  }
  
  function rejectSendEmail() {
    alert('Что то пошло не так, попробуйте позже.')
  }