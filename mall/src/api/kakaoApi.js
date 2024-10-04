import axios from "axios";

const rest_api_key = 'ba0f4a7deec6bc4bb87fb3131763e54a'
const redirect_uri = 'http://localhost:3000/member/kakao'
const auth_code_path = `https://kauth.kakao.com/oauth/authorize`

const access_token_url = `https://kauth.kakao.com/oauth/token`
const client_secret = 'Bpv8mgZFwYXhYMEdrI6spkhK1P8E3Mhu';

export const getKakaoLoginLink = () => {

    const kakaoUrl = `${auth_code_path}?client_id=${rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`

    return kakaoUrl

}

export const getAccessToken = async (authCode) => {

    const header = {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        }
    }

    // URLSearchParams로 변환
    const params = new URLSearchParams();
    params.append('grant_type', 'authorization_code');
    params.append('client_id', rest_api_key);
    params.append('redirect_uri', redirect_uri);
    params.append('code', authCode);
    params.append('client_secret', client_secret);

    try {
        const res = await axios.post(access_token_url, params, header);
        const accessToken = res.data.access_token;

        return accessToken;
    } catch (error) {
        console.error('Error fetching access token:', error);
        throw error; // 필요에 따라 에러를 처리하세요.
    }
}