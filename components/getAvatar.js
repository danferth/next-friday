import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const supabase = createClientComponentClient();

/**
 * Retrieves the avatar image URL from the specified path.
 * @param {string} path - The path of the avatar image.
 * @returns {string|null} - The URL of the avatar image, or null if there is an error.
 * @throws {Error} - If the path is invalid or there is an error downloading the image.
 */
export default async function getAvatar(path) {
  if (!path) {
    throw new Error("Invalid path", path);
  }
  console.log("path", path);
  let url = null;
  if (path.startsWith("https://")) {
    url = path;
  } else {
    try {
      url = URL.createObjectURL(
        await supabase.storage.from("avatars").download(path)
      );
    } catch (error) {
      throw new Error("Error downloading image: " + error);
    }
  }
  return url;
}