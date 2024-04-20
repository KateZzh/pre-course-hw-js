export function renderTrack(anyTrack) {
  const trackElement = document.createElement('li');
  trackElement.style.listStyle = 'none';

  const trackCoverElement = document.createElement('img');
  trackCoverElement.src = anyTrack.trackCoverImgUrl;
  trackCoverElement.style.width = '50px';

  const audio = document.createElement('audio');
  audio.src = anyTrack.trackFileUrl;
  audio.controls = true;

  trackElement.append(trackCoverElement, anyTrack.artistName + ' - ' + anyTrack.trackTitle, audio);

  return trackElement;
}