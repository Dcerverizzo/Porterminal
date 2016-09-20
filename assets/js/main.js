var commands = [
	{
		input: 'tail /etc/motd.tail',
		output: "Hi, I'm Daniel Cerverizzo, web developer who lives in Jales. How can I help you?<br>"+
				"If you prefer the normal version, <a href='http://projetos.fatecjales.edu.br/dcerverizzo/'> click  here</a><br>"
	},{
		input: 'tail -f ./skills',
		output: "PHP, Java, Laravel 5, JSF <br>"+
				"Javascript, jQuery, Node.js, React.js, Angular.js, MongoDB, ES6, Typescript <br />"+
				"CSS3, HTML5, SASS/LESS, Gulp <br>"+
				"WordPress, Drupal, Magento <br>"+
				"Linux, Apache, SQL, GIT, Docker, XMPP, AWS <br />"
	},{
		input: 'ls ./projects',
		output: "<a target='_blank' href='http://piconivieira.adv.br'>Web Music</a><br>"+
				"<a target='_blank' href='http://tatudobem.blog.br'>Empregaki</a><br>"+
				"<a target='_blank' href='http://rextec.inf.br/'>Soluciona Geral</a><br>"+
				"<a target='_blank' href='http://turbopercussion.com.br'>SistemasBR Blog</a><br>"
				
	},{
		input: 'ls ./resume',
		output: '<a href="https://registry.jsonresume.org/alexmoreno">resume</a><br>'+
				'<a href="https://github.com/dcerverizzo">github</a><br>'+
				'<a href="https://www.linkedin.com/in/daniel-cerverizzo-65a8b4b3">linkedin</a><br>'+
				'<a href="http://projetos.fatecjales.edu.br/dcerverizzo/">portfolio (HTML)</a><br>'

	},{
		input: 'service --status-all',
		output: '',
		timedOutput: [
				'[ + ]  translate-en-pt ',
				'[ + ]  site-development ',
				'[ + ]  system-development ',
				'[ + ]  devops '
		]

	},{
		input: 'ls -l ./contact',
		output: '<a target="_blank" href="mailto:danielcerverizzo@gmail.com">email</a><br> '+
				'<a target="_blank" href="http://projetos.fatecjales.edu.br/dcerverizzo/">form on portfolio</a><br>'
				

	},{
		input: 'visit my portfolio',
		output: 'visit: command not found <br />'
				

	},{
		
		input: 'python sqlmap.py -u "http://nasa.gov"',
		output: 'Trying to connect to server...',
		timedOutput: 
			[
				'Hacking: [#---------] 10%...',
				'Hacking: [##--------] 20%...',
				'Hacking: [###-------] 30%...',
				'Hacking: [####------] 40%...',
				'Hacking: [#####-----] 50%...',
				'Hacking: [######----] 60%...',
				'Hacking: [#######---] 70%...',
				'Hacking: [########--] 80%...',
				'Hacking: [#########-] 90%...',
				'Hacking: [##########] 100%...',
				'<br>[ACCESS GRANTED] <br>user/pass: admin/admin',
				'Vamo hackea a NASA!! <br>',

			 ]	
	},{
		input: 'help',
		output: 'Fork it on <a href="http://github.com/alexmoreno/METERminal">github</a> and have some fun =)'

	}

]
var commandIndex = 0;
function terminal(){
	inputCommand()
}
function inputCommand(){
	var cmd = commands[commandIndex]
	charIndex = 0
	lineIndex = 0
	$el = $('.prompt')
	$el.append('portfolio@dcerverizzo:~$ ').addClass('active');

	var typeText = function(){
		setTimeout(function(){
			console.log(cmd);
			var char = cmd.input[charIndex]
			if (char == undefined) {
				
				$el.append('<br/><span class="output">' + cmd.output + '</span><br/>');
      			$el.removeClass('active');
      			setTimeout(function(){
					if (cmd.hasOwnProperty('timedOutput')) {
						typeTimedText()
					}else{
						inputCommand(++commandIndex)
					}
					
      			}, 1000)
				return
			}
			
			$el.append(char)
			charIndex++
			typeText()

			
		}, Math.round(Math.random() * 150) + 25)
	}
	var typeTimedText = function(){

		setTimeout(function(){
			text = cmd.timedOutput[lineIndex]
			if (text == undefined) {
				$el.append('<br>')
				inputCommand(++commandIndex)

				return
			}
			$el.append('<span class="output">' + text + '</span><br/>');
      		$el.removeClass('active');
      		lineIndex++;
      		typeTimedText();

		}, Math.round(Math.random() * 550) + 25)
		return
	}
	typeText()
}
terminal();
