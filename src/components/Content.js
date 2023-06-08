import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";

const TitleTypography = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h2.fontSize,
  fontWeight: "bold",
  color: theme.palette.primary.main,
  marginY: theme.spacing(2),
}));

const MainSection = () => {
  const theme = useTheme();

  return (
    <section
      style={{
        backgroundColor: theme.palette.background.default,
        padding: "1rem",
      }}
    >
      <TitleTypography variant="h2" component="h2">
        Main Section
      </TitleTypography>
      <Typography variant="body1" component="p">
        This is the main section of the page.
      </Typography>
    </section>
  );
};

export default MainSection;
