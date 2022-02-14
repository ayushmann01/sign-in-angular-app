import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'sing-in';

  onEyeCLick(eye: HTMLElement,field: HTMLInputElement) {
    eye.classList.toggle("bi-eye");
    eye.classList.toggle("bi-eye-slash");

    if(field.type === "password") field.type = "text";
    else field.type = "password";
  }

  onTxtClick(email: HTMLInputElement, pass: HTMLInputElement, btn_submit: HTMLButtonElement) {
      if(email.value) {
        btn_submit.disabled = false;
      }
      else btn_submit.disabled = true;
  }
}


