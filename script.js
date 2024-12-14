function showIcon(iconId) {
    const selectElement = document.getElementById(iconId.replace('-icon', ''));
    const selectedText = selectElement.options[selectElement.selectedIndex].text.split(' ')[0]; // Extract the key part of the text.
    const componentType = iconId.split('-')[0]; // Extract component type from ID.

    if (iconMap[componentType] && iconMap[componentType][selectedText]) {
        const iconSrc = iconMap[componentType][selectedText];
        const imgElement = document.getElementById(iconId);

        imgElement.src = iconSrc;
        imgElement.style.display = 'inline';
    } else {
        console.error(`Icon for ${selectedText} not found in iconMap[${componentType}].`);
        document.getElementById(iconId).style.display = 'none';
    }
}
