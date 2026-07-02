const expandAccordion = (elem) => {
  const header = elem.parentElement;
  if (!header.classList.contains("active")) {
    const scope =
      header.closest(".accordion-group") ||
      header.closest(".panel") ||
      document;
    const groupAccordions = Array.from(scope.querySelectorAll(".accordion"));
    const groupPanels = Array.from(scope.querySelectorAll(".panel"));

    groupAccordions.forEach((acc) => acc.classList.remove("active"));
    groupPanels.forEach((panel) => {
      panel.style.maxHeight = null;
    });

    header.classList.add("active");
    const activePanel = header.nextElementSibling;
    if (!activePanel) return;

    if (
      activePanel.id != "skill-panel" &&
      document.querySelector("#skill-panel")
    ) {
      const skillBars = Array.from(document.querySelectorAll("#skill-percent"));
      skillBars.forEach((elem) => {
        elem.style.width = "0";
      });
    }
    activePanel.style.maxHeight = activePanel.scrollHeight + "px";
  }
};

