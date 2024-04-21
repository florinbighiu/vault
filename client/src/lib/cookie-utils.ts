export function getAjsUserIdFromCookie(): string | undefined {
  if (typeof document === "undefined") {
    return undefined;
  }

  const cookies = document.cookie.split(";");

  for (const cookie of cookies) {
    const [key, value] = cookie.trim().split("=");
    if (key === "ajs_user_id") {
      return value;
    }
  }

  return undefined;
}

