import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "@clerk/clerk-react";

const UploadForm: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const user = useAuth();
  const userId = user.userId;

  console.log(userId, typeof userId);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!file || !userId) {
      alert("Please select a file and provide a user ID");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("userId", userId);

    try {
      await axios.post("http://localhost:3000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("File uploaded successfully");
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Failed to upload file");
    }
  };

  return (
      <form onSubmit={handleSubmit} className="flex flex-row items-center">
        <div>
          <input type="file" className="hidden" onChange={handleFileChange} />
        </div>
        <button className="rounded-full bg-slate-100 hover:bg-slate-200 py-2 px-4" type="submit">Upload</button>
      </form>
  );
};

export default UploadForm;
