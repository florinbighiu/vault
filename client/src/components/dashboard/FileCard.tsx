import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface File {
  _id: string;
  name: string;
  type: string;
  size: number;
  createdAt: Date;
}

interface FileCardProps {
  file: File;
}

const FileCard: React.FC<FileCardProps> = ({ file }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{file.name}</CardTitle>
        <CardDescription>{file.type}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Created at:{file.createdAt}</p>
      </CardFooter>
    </Card>
  );
};

export default FileCard;
