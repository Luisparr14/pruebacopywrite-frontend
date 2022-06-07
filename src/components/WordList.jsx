
import { styled, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  margin: "0 2rem",
  [theme.breakpoints.up("sm")]: {
    margin: "0 5rem",
  },
  [theme.breakpoints.up("md")]: {
    margin: "0 10rem",
  }
}));

const Word = styled('div')(({ theme }) => ({
  backgroundColor: "#ff00ff00",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "black",
  margin: theme.spacing(0, 0, 2, 0),
  fontSize: "1.5rem",
  width: "70%",
  alignSelf: "center",
  padding: theme.spacing(1, 1, 1, 1),

}));

export default function WordList({ words }) {
  return (
    <Container>
      <Box sx={{ flexGrow: 1, margin: '10px' }}>
        <Typography variant="h4" textAlign={'start'}>
          Results
        </Typography>
      </Box>
      {words && words.map((word, i) => (
        <Word key={word + '' + i}>
          <Typography variant="p">{word}</Typography>
        </Word>
      ))}
    </Container>
  );
}