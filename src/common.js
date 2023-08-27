const APP_URL = import.meta.env.VITE_APP_URL;

const ACCESS_TOKEN = "ACCESS_TOKEN";
const TOKEN_TYPE = "TOKEN_TYPE";
const EXPIRES_IN = "EXPIRES_IN";
const LOADED_TRACKS = "LOADED_TRACKS";

const ENDPOINT = {
	userInfo: "me",
	featuredPlaylist: "browse/featured-playlists?limit=5",
	toplists: "browse/categories/toplists/playlists?limit=10",
	playlist: "playlists",
	userPlaylist: "me/playlists",
};

const SECTIONTYPE = {
	DASHBOARD: "DASHBOARD",
	PLAYLIST: "PLAYLIST",
};

const logout = () => {
	localStorage.removeItem(ACCESS_TOKEN);
	localStorage.removeItem(EXPIRES_IN);
	localStorage.removeItem(TOKEN_TYPE);
	window.location.href = APP_URL;
};

const setItemInLocalStorage = (key, value) =>
	localStorage.setItem(key, JSON.stringify(value));

const getItemFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

export {
	ACCESS_TOKEN,
	TOKEN_TYPE,
	EXPIRES_IN,
	LOADED_TRACKS,
	ENDPOINT,
	SECTIONTYPE,
	logout,
	setItemInLocalStorage,
	getItemFromLocalStorage,
};
