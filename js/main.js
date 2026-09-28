(function(){
// 3D tilt on cards and photo
document.querySelectorAll('.card,.photo .frame').forEach(function(el){
el.addEventListener('mousemove',function(e){var b=el.getBoundingClientRect(),x=(e.clientX-b.left)/b.width-.5,y=(e.clientY-b.top)/b.height-.5;
el.style.transform='rotateY('+x*14+'deg) rotateX('+-y*14+'deg)'});
el.addEventListener('mouseleave',function(){el.style.transform=''})});
// reveal + skill bars
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');
e.target.querySelectorAll('.bar b').forEach(function(b){b.style.width=b.dataset.w+'%'})}})},{threshold:.15});
document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)});
// typing
var t=document.getElementById('typed');
if(t){var w=['Computer Science Student','Full-Stack Developer','Problem Solver'],i=0,j=0,d=false;
(function tick(){var x=w[i];t.textContent=x.slice(0,j);
if(!d&&j++===x.length){d=true;return setTimeout(tick,1400)}
if(d&&j-->0){}else if(d){d=false;i=(i+1)%w.length;j=0}
setTimeout(tick,d?40:80)})()}
// contact form -> opens email app
var f=document.getElementById('cf');
if(f)f.addEventListener('submit',function(e){e.preventDefault();
location.href='mailto:your.email@example.com?subject='+encodeURIComponent('Message from '+f.name.value)+'&body='+encodeURIComponent(f.msg.value+'\n\n'+f.email.value)});
})();
