import axios from 'axios'

const pictureApi = {
  getImgSrc: async (): Promise<string | void> => {
    try {
      const res = await axios.get('https://dog.ceo/api/breeds/image/random')
      return res.data.message
    } catch (err) {
      // handle the error
      if (err instanceof Error) {
        console.log(err.name) // the type of error
        console.log(err.message) // the description of the error
        console.log(err.stack) // the stack trace of the error
      } else {
        // handle other errors
      }
    }
  }
}

export { pictureApi }
