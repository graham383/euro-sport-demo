(function(){
var b=document.getElementById('burger'),n=document.getElementById('nav');
b.addEventListener('click',function(){n.classList.toggle('open')});
n.addEventListener('click',function(){n.classList.remove('open')});
var M={'Audi':['A3','A4 / S4 (B9)','RS3','RS6'],'BMW':['M2 (G87)','M3 / M4 (G80/G82)','M3 / M4 (F8X)','M5 (F90)'],'Mercedes-Benz':['C63 AMG','A45 AMG','E63 AMG'],'Porsche':['911 (992)','911 (991)','Cayman / 718','Macan'],'Volkswagen':['Golf R','GTI','Jetta GLI'],'Volvo':['S60 Polestar','XC60','V60']};
var E=['Base engine','Performance variant'];
var mk=document.getElementById('mk'),md=document.getElementById('md'),en=document.getElementById('en');
function fill(s,a,l){s.innerHTML='<option value="">'+l+'</option>'+a.map(function(x){return '<option>'+x+'</option>'}).join('');s.disabled=!a.length}
mk.addEventListener('change',function(){fill(md,M[mk.value]||[],'Select Model');fill(en,[],'Select Engine')});
md.addEventListener('change',function(){fill(en,md.value?E:[],'Select Engine')});
document.getElementById('go').addEventListener('click',function(){document.getElementById('shop').scrollIntoView({behavior:'smooth'})});
})();
