const { createApp } = Vue;

function getLoginInfo() {
  const LOGIN_EMAIL = 'GSS_LOGIN_EMAIL';
  const LOGIN_PW = 'GSS_LOGIN_PASSWORD';
  const email = localStorage.getItem(LOGIN_EMAIL);
  const password = localStorage.getItem(LOGIN_PW);

  return { email, password };
}

function setLoginInfo(e, pw) {
  const LOGIN_EMAIL = 'GSS_LOGIN_EMAIL';
  const LOGIN_PW = 'GSS_LOGIN_PASSWORD';
  const email = localStorage.setItem(LOGIN_EMAIL, e);
  const password = localStorage.setItem(LOGIN_PW, pw);

  return { email, password };
}

function login(email, password, callback, error) {
  $.ajax({
    url: ' https://gsslab-website-api.vercel.app/api/login',
    type: 'POST',
    cache: false,
    dataType: 'json',
    data: { email, password },
  })
    .done((resumes) => {
      console.log('Login Response', resumes);
      setLoginInfo(email, password);
      callback(resumes.data);
    })
    .fail((err) => {
      console.log(err);
      error(err);
    });
}

createApp({
  data() {
    return {
      email: '',
      password: '',
      errorEmail: false,
      errorPassword: false,
      isShowLoginPage: false,
    };
  },
  created() {
    const info = getLoginInfo();

    if (_.includes(info.email, '@')) {
      this.isShowLoginPage = false;

      login(
        info.email,
        info.password,
        (resumes) => {
          this.isShowLoginPage = false;
        },
        () => {
          this.isShowLoginPage = true;
        },
      );
    } else {
      this.isShowLoginPage = true;
      document.querySelector('.js-filter_btn-open').style.display = 'none';
      document.querySelector('.resume-list-component').style.display = 'none';
    }
  },
  methods: {
    submitLogin() {
      login(
        this.email,
        this.password,
        (resumes) => {
          this.isShowLoginPage = false;
          document.querySelector('.js-filter_btn-open').style.display = 'block';
          document.querySelector('.resume-list-component').style.display = 'block';
          console.log('Success to login', resumes);
        },
        () => {
          alert('ユーザーID または パスワード が間違っています。');
        },
      );
    },
  },
}).mount('#app');
