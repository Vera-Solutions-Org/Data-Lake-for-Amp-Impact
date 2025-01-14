import React from "react";
import isNil from "lodash/isNil";
import { Box, Container, Heading, Text, Button, useTheme } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom";

import { Header } from "components/Header";
import { CurvedBox } from "components/CurvedBox";
import { useStore } from "AppContext";
import { BackHome } from "pages/back-home/BackHome";
import { steps } from "pages/home/Steps";
import { StepBox } from "pages/home/StepBox";
import { ResumePanel } from "pages/home/ResumePanel";

export const Home = observer(() => {
  const theme = useTheme();
  const appStore = useStore();
  const navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (appStore.completedStep1) return <BackHome />;

  const handleNewInstallation = async () => {
    const hasInstallation = !isNil(appStore.installation);

    if (!hasInstallation) {
      appStore.newInstallation();
    }

    navigate("/steps/1");
  };

  return (
    <Box id="home">
      <CurvedBox bgGradient={theme.gradients.bgLight} />

      <Header />

      <Container maxW="container.md" position="relative">
        <Box mt="-4" position="relative" boxShadow="base" borderRadius="lg" bg="orange.50" p={6}>
          <Box>
            <Heading
              display="inline-block"
              size="lg"
              pt="10px"
              pb="10px"
              pl={2}
              bgGradient="linear(to-r, orange.500, orange.400)"
              bgClip="text"
              textTransform="uppercase"
              letterSpacing="-1px"
            >
              What to expect
            </Heading>
          </Box>
          <Text pl={2}>
            In just a few steps, you can bring your Amp Impact and supporting Salesforce data to AWS and keep it in sync. Take a look at the summary of the steps needed, no
            worries though, we will guide you through each step.
          </Text>
          <Box textAlign="right" w="full" mt={4} mb={8}>
            <Button id="home-btn-lets-go" colorScheme="orange" size="md" rightIcon={<ArrowForwardIcon />} onClick={handleNewInstallation}>
              Let's Go
            </Button>
          </Box>

          {steps.map((item, index) => (
            <StepBox key={index} step={item} index={index} />
          ))}
        </Box>

        <ResumePanel />
      </Container>

      <Box h="50px">&nbsp;</Box>
    </Box>
  );
});
