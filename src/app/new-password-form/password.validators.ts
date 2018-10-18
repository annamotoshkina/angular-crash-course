import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidators {
    static correctOldPassword(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === "123") {
                    resolve({ correctOldPassword: true });
                } else {
                    resolve(null);
                }
            }, 2000);
        });
    }

    static confirmPasswordEqualsNew(control: AbstractControl): ValidationErrors | null {
        if (control.value.newPassword === control.value.confirmPassword) {
            return null;
        }
        return { confirmPasswordEqualsNew: true };
    }
}