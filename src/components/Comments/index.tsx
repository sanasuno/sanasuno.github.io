import React from "react";
import Giscus from "@giscus/react";
import { useColorMode } from "@docusaurus/theme-common";

export default function Comments(): JSX.Element {
  const { colorMode } = useColorMode();

  return (
    <div>
      <Giscus
        id="comments"
        repo="sanasuno/sanasuno.github.io"
        repoId="R_kgDON7MpzA="
        category="Announcements"
        categoryId="DIC_kwDON7MpzM4CnaLx"
        mapping="title"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={colorMode === "dark" ? "dark_tritanopia" : "light_tritanopia"}
        lang="ja"
        loading="lazy"
      />
    </div>
  );
}