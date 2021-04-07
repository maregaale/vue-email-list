const app = new Vue (
  {
    el: "#root",
    data: {
      mailingList: [],
    },
    mounted: function () {
      for (var i = 0; i < 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((mail) => {
          this.mailingList.push(mail.data.response);
        });
      }
    },
  }
);
