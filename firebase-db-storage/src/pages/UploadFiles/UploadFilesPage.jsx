import { A11yHidden } from '@/components';
import {
  useAllDownloadURL,
  useDeleteFile,
  useUploadFiles,
} from '@/firebase/storage';
import { useId } from 'react';
import styled from 'styled-components';

export default function UploadFilesPage() {
  const id = useId;

  const { fileInputRef, uploadFiles } = useUploadFiles({ usingId: false });

  const { isLoading, error, downloadURLList } = useAllDownloadURL();

  const { deleteFile } = useDeleteFile();

  const handleUploadFiles = () => {
    console.log('파일 업로드 요청');
    uploadFiles();
  };

  const handleDeleteFile = () => {
    console.log('assets/dev.png 삭제');
    deleteFile('assets/dev.png');
  };

  return (
    <>
      <StyledContainer>
        <div>
          <A11yHidden as="label" htmlFor={id}>
            파일 업로드
          </A11yHidden>
          <input type="file" id={id} multiple ref={fileInputRef} />
        </div>
        <button type="button" onClick={handleDeleteFile}>
          업로드
        </button>
      </StyledContainer>
      {/* <p>파일 업로드 갯수: {urlList ? urlList.length : 0}</p> */}
      <ul>
        {downloadURLList &&
          downloadURLList.map((url) => (
            <li key={url}>
              <img height={30} src={url} alt="" />
            </li>
          ))}
      </ul>
    </>
  );
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  text-align: center;
`;
