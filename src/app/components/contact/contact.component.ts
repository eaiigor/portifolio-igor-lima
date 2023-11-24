import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs  from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  form: FormGroup = this.fb.group({
    from_name: ['', Validators.required],
    to_name: 'Igor',
    from_email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', Validators.required],
  })

  constructor(private fb: FormBuilder, private toastr: ToastrService) {}

  async sendEmail() {
    if (!this.form.valid) {
      this.markAllFieldsAsTouched(this.form);
      return;
    }

    emailjs.init("om9JU7xsQOs2OrigJ")

    let response = await emailjs.send("service_ru5yn2r","template_n66iswf",{
      from_name: this.form.value.from_name,
      to_name: this.form.value.to_name,
      from_email: this.form.value.from_email,
      subject: this.form.value.subject,
      message: this.form.value.message,
    });

    this.toastr.success('Sucesso! E-mail enviado ✉️');
    this.form.reset();
  }

  markAllFieldsAsTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      if (control instanceof FormGroup) {
        this.markAllFieldsAsTouched(control);
      } else {
        control.markAsTouched();
      }
    });
  }

  isFieldInvalid(field: string) {
    const formControl = this.form.get(field);
    return formControl?.invalid && formControl?.touched;
  }
  
  isFieldTouched(field: string) {
    const formControl = this.form.get(field);
    return formControl?.touched;
  }
}

