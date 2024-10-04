
const rest_api_key = 'ba0f4a7deec6bc4bb87fb3131763e54a'
const redirect_uri = 'http://localhost:3000/member/kakao'

const auth_code_path = `https://kauth.kakao.com/oauth/authorize`

export const getKakaoLoginLink = () => {

    const kakaoUrl = `${auth_code_path}?client_id=${rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`

    return kakaoUrl

}