const tabs = document.querySelectorAll('[role = "tab"]');
const panels = document.querySelectorAll('[role = "tabpanel"]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.setAttribute('aria-selected', 'false'));
        panels.forEach(p => p.setAttribute('hidden', 'true'));

        tab.setAttribute('aria-selected', 'true');
        const id = tab.getAttribute('aria-controls');
        document.getElementById(id).removeAttribute('hidden');
    })
})