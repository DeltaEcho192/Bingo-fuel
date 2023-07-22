import Cookies from 'js-cookie';

export function checkLogin() {
	if (Cookies.get("logged") === "true") {
		return true;
	} else {
		return false;
	}
}
