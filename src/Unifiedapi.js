import React from 'react';
import axios from 'axios';

export default function Unifiedapi() {
  const cookieHeader = 'gAAAAABiMmTidIyRVze1zCX4DCFs9UiNeZD0ynU3y8IAkiaS1jurfqZherkKKgzqtspAOfzYo_gfyD_hBCPHSzWb3BQMl25dVAJ_Mrs3267Z2Et9Te_kEC0=';
  const key = '8ce285fee9139b59c7dab09e6947b1a4e7aa70d6';

  const headers = {
    'Content-Type': 'application/json',
  };

  // Getting project list
  axios
    .get(`https://uapi.err.io/2021-07-04/projects?key=${cookieHeader}`, { headers })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });

  // Sending login info to get reponse token.
  axios
    .post(
      // 'http://localhost:7003/2021-07-04/sessions',
      'https://uapi.err.io/2021-07-04/sessions',
      //   `https://err.io/api/v4/projects?key=${key}`,
      //   `https://uapi.err.io/2021-07-04/projects?key=${key}`,
      {
        email: 'logintest@airbrake.io',
        password: 'Login1234',
      },
      { withCredentials: true },
      { headers }
    )
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });

  return <div>HELLO</div>;
}
