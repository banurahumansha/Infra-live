document.addEventListener("DOMContentLoaded", function () {

    const tabs = document.querySelectorAll(".sm-tab");
    const panels = document.querySelectorAll(".sm-panel");

    tabs.forEach(tab => {

        tab.addEventListener("click", function () {

            const target = this.getAttribute("data-target");

            // Remove active classes
            tabs.forEach(t => t.classList.remove("active"));
            panels.forEach(p => p.classList.remove("active"));

            // Activate selected tab
            this.classList.add("active");

            // Activate corresponding panel
            const activePanel = document.getElementById(target);

            if (activePanel) {
                activePanel.classList.add("active");
            }

        });

    });

});