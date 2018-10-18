import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'new-password-form',
  templateUrl: './new-password-form.component.html',
  styleUrls: ['./new-password-form.component.css']
})
export class NewPasswordFormComponent {
  private form = new FormGroup({
    oldPassword: new FormControl('', Validators.required, PasswordValidators.correctOldPassword),
    newPasswordGroup: new FormGroup({
      newPassword: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    }, PasswordValidators.confirmPasswordEqualsNew),
  });

  get oldPassword() {
    return this.form.get('oldPassword');
  }

  get newPassword() {
    return this.form.get('newPasswordGroup').get('newPassword');
  }

  get confirmPassword() {
    return this.form.get('newPasswordGroup').get('confirmPassword');
  }

  get newPasswordGroup() {
    return this.form.get('newPasswordGroup');
  }

  private changePassword(): void {
    console.log(this.form.value);
  }
}
