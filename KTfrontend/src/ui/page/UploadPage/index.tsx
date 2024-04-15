import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Box, CircularProgress, Container, Divider, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import AWS from 'aws-sdk';
import React, { useEffect, useState } from 'react';
import TopNavBar from "../../compoent/TopNavBar.tsx";

const S3_BUCKET = 'proecttesting';
const REGION = 'ap-southeast-1';
const ACCESS_KEY = 'your-access-key'; // Update with your actual access key
const SECRET_ACCESS_KEY = 'your-secret-access-key'; // Update with your actual secret access key

AWS.config.update({
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
    region: REGION,
});

// const sts = new AWS.STS(); // Initialize the AWS STS
const s3 = new AWS.S3(); // Initialize the AWS S3

export default function UploadVideoPage() {
    const [isDragging, setIsDragging] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [fileDetails, setFileDetails] = useState<string>('');
    const [agreeTerms, setAgreeTerms] = useState(false);

    const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedFile(e.target.files[0]);
            handleUpload(e.target.files[0]);
        }
    };

    const handleUpload = async (file: File | null) => {
        if (!file) return;

        const folderName = 'new_folder';
        const fileName = file.name;

        // Call STS to get temporary credentials
        try {
            // const stsData = await sts.getCallerIdentity().promise();
            // const accountId = stsData.Account;

            // Construct the key using the folderName and fileName
            const key = `${folderName}/${fileName}`;

            // Set up the parameters for the S3 upload
            const params = {
                Bucket: S3_BUCKET,
                Key: key,
                Body: file,
                ACL: 'public-read',
                // Optionally, you can add additional metadata or configurations here
            };

            // Upload the file to S3 using the configured parameters
            const data = await s3.upload(params).promise();
            console.log('Upload successful:', data.Location);
            setFileDetails('');
        } catch (err) {
            console.error('Error uploading file:', err);
        }
    };

    useEffect(() => {
        const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
            e.preventDefault();
            setIsDragging(true);
        };

        const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
            e.preventDefault();
            setIsDragging(false);
        };

        const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
            e.preventDefault();
            setIsDragging(false);
            const file = (e as unknown as React.DragEvent<HTMLDivElement>).dataTransfer.files[0];
            setSelectedFile(file);
            setFileDetails(`File Name: ${file.name}, Size: ${file.size} bytes, Type: ${file.type}`);
        };

        document.body.addEventListener('dragenter', handleDragEnter as any);
        document.body.addEventListener('dragover', handleDragEnter as any);
        document.body.addEventListener('dragleave', handleDragLeave as any);
        document.body.addEventListener('drop', handleDrop as any);

        return () => {
            document.body.removeEventListener('dragenter', handleDragEnter as any);
            document.body.removeEventListener('dragover', handleDragEnter as any);
            document.body.removeEventListener('dragleave', handleDragLeave as any);
            document.body.removeEventListener('drop', handleDrop as any);
        };
    }, []);

    return (
        <>
            <TopNavBar />
            <Box
                style={{
                    height: '80vh',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    backgroundColor: isDragging ? 'lightblue' : 'white',
                }}
            >
                <Container maxWidth="sm">
                    <Typography variant="h4" gutterBottom textAlign="center">
                        Submit a Video
                    </Typography>

                    <Typography variant="body1" gutterBottom textAlign="center">
                        Submit your video for evaluation
                    </Typography>

                    <Divider sx={{ my: 2 }} />

                    <Typography variant="h4" gutterBottom textAlign="center">
                        Upload File
                    </Typography>

                    <Box
                        style={{
                            cursor: 'pointer',
                            border: `2px dashed ${isDragging ? 'blue' : 'gray'}`,
                            padding: '20px',
                            borderRadius: '10px',
                            position: 'relative',
                            overflow: 'hidden',
                        }}
                        onClick={() => {
                            const fileInput = document.getElementById('file-input');
                            if (fileInput) {
                                fileInput.click();
                            }
                        }}
                    >
                        <input
                            id="file-input"
                            type="file"
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                opacity: 0,
                                cursor: 'pointer',
                            }}
                            onChange={handleFileInput}
                        />
                        <CloudUploadIcon fontSize='large' color='disabled' />
                        <Typography variant="body1" style={{ color: isDragging ? 'blue' : 'inherit' }}>
                            {isDragging ? 'Drop your video file / picture here' : 'Drag & drop video file  / picture here, or click to select'}
                        </Typography>
                    </Box>
                    {selectedFile && (
                        <Typography variant="body2">{fileDetails}</Typography>
                    )}

                    <Box>
                        {/* Your additional content */}
                    </Box>

                    <Typography variant="body1" gutterBottom>
                        Make sure your video is no longer than 10 minutes.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Make sure you own the right to use all music & images on the video.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Make sure your video does not contain inappropriate language, images, or sounds.
                    </Typography>

                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={agreeTerms}
                                onChange={(e) => setAgreeTerms(e.target.checked)}
                                color="primary"
                            />
                        }
                        label="Do You Agree to the Terms Above?"
                    />
                    <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                        onClick={() => handleUpload(selectedFile)}
                        disabled={!selectedFile}
                    >
                        Upload file
                    </Button>
                    {<CircularProgress style={{ marginTop: '20px' }} />}
                </Container>
            </Box>
        </>
    );
}
