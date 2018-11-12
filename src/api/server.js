import ServerUtils from './server-utils';

// export async function getTest() {
//   const { data } = await ServerUtils.get('/api/test');
//   return data;
// }


export async function RgbaValidation(params) {
  const { data } = await ServerUtils.post('/valid_rgb_a', {
    body: {
      input_string: params.inputString
    },
    headers: {
      'Content-Type':'application/json',
    },
  });
  return data;
}
