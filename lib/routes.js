import Register from '../imports/ui/components/Login/Register';
import Home from '../imports/ui/pages/Home';

FlowRouter.route('/', {
    name: "home",
    action(){
        ReactLayout.render(Home);
        console.log('go home, you are drunk');
    }
});

FlowRouter.route('/register', {
    name: "register",
    action(){
      ReactLayout.render(Register);
        console.log('register user page reached');
    }
});
