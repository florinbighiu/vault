import { useState, useEffect } from "react";
import axios from "axios";
import FileCard  from "@/components/dashboard/FileCard";
import { useAuth } from "@clerk/clerk-react";

export default function FilesPage() {
  const [files, setFiles] = useState([]);

  const user = useAuth();
  const userId = user.userId;

  useEffect(() => {
    fetchFiles();
  }, [files]);

  const fetchFiles = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/files/${userId}`);
      setFiles(response.data);
    } catch (error) {
      console.error("Error fetching files:", error);
    }
  };

  return (
      <div className="grid grid-cols-4 items-center gap-3 m-5">
        {files.map((file) => (
          <FileCard key={file._id} file={file} />
        ))}
      </div>
  );
}
