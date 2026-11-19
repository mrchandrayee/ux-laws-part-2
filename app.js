const $=id=>document.getElementById(id);
// Stamp cards: the video compares zero progress with a two-stamp head start.
function stamps(id,earned){const el=$(id);el.innerHTML=Array.from({length:10},(_,i)=>`<span class="stamp ${i<earned?'filled':''}">${i<earned?'✓':''}</span>`).join('')}
stamps('zeroStamps',0);stamps('headStamps',2);

// Postel's Law: accept common phone-number punctuation and normalize for validation.
const samples=['4155550123','(415) 555-0123','415-555-0123','415 555 0123'];
const strict=$('strictPhone'),friendly=$('friendlyPhone');
function digits(s){return s.replace(/\D/g,'')}
function phoneCheck(){const raw=digits(strict.value);$('strictScore').textContent=(samples.some(s=>s===strict.value.trim())?4:raw.length===10?1:0)+' of 4';const d=digits(friendly.value);$('friendlyScore').textContent=(d.length===10?'4 of 4':d.length+' digits');friendly.setCustomValidity(d.length===10?'':'Enter a 10-digit phone number.')}
strict.addEventListener('input',phoneCheck);friendly.addEventListener('input',phoneCheck);phoneCheck();

// Tesler's Law: ZIP lookup is a local demo of system-filled address fields.
const zip=$('zip');const zipData={'94105':['San Francisco','CA','1 Market St'],'10001':['New York','NY','350 5th Ave'],'60601':['Chicago','IL','100 E Randolph St'],'30301':['Atlanta','GA','Peachtree St']};
zip.addEventListener('input',()=>{const v=zip.value.trim();if(zipData[v]){$('city').value=zipData[v][0];$('state').value=zipData[v][1];$('street').value=zipData[v][2];$('zipHint').textContent='Address details filled from the sample ZIP lookup.';$('keyCount').textContent='5 keys'}else{$('zipHint').textContent='Try 94105, 10001, 60601 or 30301.';$('keyCount').textContent='ZIP only'}});

// Similarity: every row that looks interactive really opens a detail panel.
const settings={'Account':'Manage your account email and profile.','Version':'App version 4.2.1.','Notifications':'Choose which notifications you receive.','Storage':'Review your storage usage.','Privacy':'Manage privacy and permissions.','Device':'Manage devices linked to your account.'};
document.querySelectorAll('#settingsList button').forEach(btn=>btn.addEventListener('click',()=>{$('settingHint').textContent=settings[btn.querySelector('span').textContent];$('hiddenCount').textContent='0 hidden'}));

// Serial position example highlights the primary action at the end of the navigation.
document.querySelectorAll('.menu-bar span').forEach(item=>item.addEventListener('click',()=>{const parent=item.parentElement;parent.querySelectorAll('span').forEach(x=>x.classList.remove('selected'));item.classList.add('selected')}));
