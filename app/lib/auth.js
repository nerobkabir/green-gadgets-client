export const logout = () => {
  document.cookie =
    "greengadgets_auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
};

export const login = () => {
  document.cookie = "greengadgets_auth=true; path=/;";
};

export const isLoggedIn = () => {
  if (typeof document === "undefined") return false;
  return document.cookie.includes("greengadgets_auth=true");
};
