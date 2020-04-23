import axios from 'axios';

const vars = {
  token:
    'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE1ODc2NzUyMDgsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuZ3JhcGhjbXMuY29tL3YyL2NrOWQ3bjNwcTEzNXUwMXhwODV3eGJnOXMvbWFzdGVyIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiNzExZWVkZGMtOTkxYS00YjEwLWE1M2ItMDJkMTM0OWM3ZjQ1IiwianRpIjoiY2s5ZDh0cmxmMTNwMjAxeXk1MnBmODhxayJ9.pqV28oyvBgYmJ0mOhLKhyg2Gu2TiALYME7V3gHM6lavl6Qfer6EbtGqqo4kcrxtVKe9DGCH71QRibceg5AnsN92KhfYdagoOXyGo8_uymFuUWbiNUNITBfwrcbct6gSIkcZqje0Ru-UqjeHRGBDPTNlmn8SkyzEy_VidWbRCa3AclawUOUH0YfOA9nZtnpHUXvfYDnsCEoUJKEwbuWZ2IszZn9Wy7VZ1nbhjRQ5OeRXGX2nDnWF1MohEXL85I6H5yW1K7iYgpv1QNQSB9h8iO0f_71awTqIHTgYu8TFe_NfCdOI1A-Isfw6OvO6rqP6EJAF0tRTsRmMskK74WsRNZ-d2n2e0rLu84PTjaB0cC5VG-OpL-UI070u1QWtVFESUVZlKYPI8HW6V_5pjCa1hmgNdsBgXjoJ-KRyaJcjRO1puaK8JaIXYIpnjd6Yb15Ih72zEfKwiUJixC1pg6aDXUWRilThTwH9Uym6aHy_8hVyq--8cgvWnZqPdYJFdXq9MbQ2bqzvq6VsxZeCxxBtJ6X1WGh29yfNQ-NNkO1Ba9CWMfkCt_k43Bv4kRw_ThaabYR0_jH_6YYccc8t_VUyj1GVDCraipMe63jxDiql8DQvSZjDt6g3X9B131Yvtst_wkiIw7Gd8ju_MdUcHLceiHfkK6yuHgiRxU6K4J-_tMbQ',
};

export default async (req, res) => {
  console.log(req.body);

  try {
    const { data } = await axios({
      url:
        'https://api-eu-central-1.graphcms.com/v2/ck9d7n3pq135u01xp85wxbg9s/master',
      method: 'POST',
      headers: { Authorization: `Bearer ${vars.token}` },
      data: {
        query: `
          mutation createNote($title: String!, $content: String!) {
            createNote(data: {title: $title, content: $content}) {
              id
              title
              content
            }
          }
        `,
        variables: req.body,
      },
    });

    console.log('============', data);

    res.statusCode = 200;
  } catch (error) {
    console.log('response!!', error.response);

    res.statusCode = 500;
  }

  res.setHeader('Content-Type', 'application/json');
  res.end();
};
