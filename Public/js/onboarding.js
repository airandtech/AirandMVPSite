function linkCopier() {
  var copyLink = document.getElementById("download-link");
  copyLink.select();
  copyLink.setSelectionRange(0, 99999)
  document.execCommand("copy");
  // alert("Copied the text: " + copyLink.value);
}

// const sharePromise = navigator.share(data);

//Share App Download link
const shareData = {
  title: 'Airand Rider App',
  text: 'Airand Rider App',
  url: 'https://play.google.com/store/apps/details?id=com.airandriderapp',
}

const btn = document.querySelector('#share');

// Must be triggered some kind of "user activation"
btn.addEventListener('click', async () => {
  try {
    await navigator.share(shareData);
    // alert('link shared successfully');
  } catch (err) {
    console.log('Error: ' + err);
  }
});