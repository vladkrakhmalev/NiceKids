export type TFormData = {
  email: string
  password: string
}

type TReturnData = {
  status: boolean,
  message: string
} 

export const validateData =(formData: TFormData): boolean => {
  const email = formData.email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  const password = formData.password.length >= 4

  return email && password ? true : false
}

export const fetchData = async (formData: TFormData): Promise<TReturnData> => {
  console.log(`Send data by API. \nEmail: ${formData.email}; \nPassword: ${formData.password}.`)
  return {status: true, message: ''}
}