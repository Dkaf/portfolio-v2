<template lang="pug">
  .contact-me.section-div
    h3.contact Send me an email at 
      a.email(href="mailto:daniel.j.kafer@gmail.com") Daniel.J.Kafer@Gmail.com
    h3.contact or drop your info in this form 
    form.contact-form(action="https://formspree.io/daniel.j.kafer@gmail.com", method="POST")
      label.form-label(for="name") Your Name
      input.form-input(type="text", name="name")
      label.form-label(for="email") Your Email
      input.form-input(type="email", name="_replyto")
      label.form-label(for="message") What Can I Help You With?
      textarea.form-message(name="message")
      input.form-submit(type="submit", value="Send")
</template>

<script>
export default {
  name: 'ContactMe',
};
</script>

<style>
.contact-me {
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
}

.contact {
  font-size: 2rem;
  margin: 0px;
}

.contact-form {
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 500px;
  padding: 50px;
}

.form-label {
  font-size: 1.3rem;
}

.form-input, .form-message {
  color: white;
  border: none;
  border-bottom: solid 2px #f45942;
  background-color: transparent;
  /* padding: 10px; */
  margin: 20px;
  font-size: 1.3rem;
  line-height: 1.3rem;
  width: 100%;
}

.form-message {
  font-family: 'Jaapokki';
  font-weight: normal;
}

.form-input:focus, .form-message:focus {
  outline: none;
  caret-color: white;
}

.email {
  color: white;
  text-decoration-color: #f45942;
  transition: font-size ease-in-out .5s;
}

.email:active {
  color: white;
}

.email:hover {
  font-size: 2.2rem;
}

.form-submit {
  border: none;
  background-color: #f45942;
  height: 50px;
  width: 250px;
  font-size: 2rem;
  color: white;
}

@media screen and (max-width: 500px) {
  .contact {
    padding: 20px;
    font-size: 1.7rem;
  }
  .contact-me {
    padding-top: 0;
  }

  .contact-form {
    width: 100%;
  }

  .form-input, .form-message {
    width: auto;
  }

}

</style>


