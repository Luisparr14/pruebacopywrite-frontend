import styled from "@emotion/styled";
import { Box } from "@mui/system";

const Container = styled(Box)({

});

export default function WordList({ words, onClick }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <h1>WordList</h1>
    </Box>
  );
}