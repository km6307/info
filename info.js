  const sections = ['top','about','skills','projects','certificates','contact'].map(id => document.getElementById(id));
  const tabs = Array.from(document.querySelectorAll('.tab'));
  const helloText = document.getElementById('hello');
  const iText = document.getElementById('i');
  const amText = document.getElementById('am');
  const krishnaText = document.getElementById('krishna');
  const murariText = document.getElementById('murari');
  const mishraText = document.getElementById('mishra');

  // Show greeting words with delays: Hello after 2s, I after 3s, am after 4s
  [helloText, iText, amText, krishnaText, murariText, mishraText].forEach(e => {
    if (e) {
      e.style.opacity = '0';
      e.style.transition = 'opacity 0.5s ease';
    }
  });

  setTimeout(() => {
    if (helloText) helloText.style.opacity = '1';
  }, 200);

  setTimeout(() => {
    if (iText) iText.style.opacity = '1';
  }, 500);

  setTimeout(() => {
    if (amText) amText.style.opacity = '1';
  }, 750);

  setTimeout(() => {
    if (krishnaText) krishnaText.style.opacity = '1';
  }, 1000);

  setTimeout(() => {
    if (murariText) murariText.style.opacity = '1';
  }, 1500);

  setTimeout(() => {
    if (mishraText) mishraText.style.opacity = '1';
  }, 2000);

  function setActiveTab(){
    let current = sections[0];
    const scrollPos = window.scrollY + 80;
    sections.forEach(sec => {
      if (sec && sec.offsetTop <= scrollPos) current = sec;
    });
    tabs.forEach(tab => tab.classList.remove('active'));
    const idx = sections.indexOf(current);
    if (tabs[idx]) tabs[idx].classList.add('active');
  }

  window.addEventListener('scroll', setActiveTab, { passive: true });
  setActiveTab();