import React from "react";
import LinkIcon from "./components/LinkIcon";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <h1>Link Component</h1>
      <h4>open in the same tab:</h4>
      <LinkIcon
        link="https://giphy.com/gifs/shaun-the-sheep-movie-not-my-gif-2016-oscar-nominations-tIeCLkB8geYtW"
        icon={faLink}
        openInNewTab={false}
      />
      <h4>open in a new tab:</h4>
      <LinkIcon
        link="https://giphy.com/gifs/donald-ASzK5wWjMtc6A"
        icon={faLink}
        openInNewTab={true}
      />
      <h4>Link with a text:</h4>
      <LinkIcon
        link="https://giphy.com/gifs/channelfrederator-channel-frederator-marmota-studio-cRq8TJsIKmQRG"
        icon={faLink}
        openInNewTab={true}
        linkText="For more informations, click here: "
      />
    </>
  );
};

export default App;
