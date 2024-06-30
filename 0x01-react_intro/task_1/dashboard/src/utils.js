function getFullYear() {
    return new Date().getFullYear();
}

function getFooterCopy(isIndex) {
    if (isIndex === true) {
        return 'Holberton School'; // Corrected the typo here
    } else {
        return 'Holberton School main dashboard';
    }
}

function getLatestNotification () {
    return (
      <p><strong>Urgent requirement</strong> - complete by EOD</p>  
    )

}
 export { getFullYear, getFooterCopy, getLatestNotification };

