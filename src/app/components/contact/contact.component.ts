import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  sending = false;

  form: FormGroup = this.fb.group({
    from_name: ['', Validators.required],
    to_name: 'Igor',
    from_email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private translate: TranslateService
  ) {}

  async sendEmail(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.sending = true;
    try {
      emailjs.init('om9JU7xsQOs2OrigJ');
      await emailjs.send('service_ru5yn2r', 'template_n66iswf', {
        from_name: this.form.value.from_name,
        to_name: 'Igor',
        from_email: this.form.value.from_email,
        subject: this.form.value.subject,
        message: this.form.value.message,
      });
      this.toastr.success(this.translate.instant('contact.sent'));
      this.form.reset({ to_name: 'Igor' });
    } catch {
      this.toastr.error(this.translate.instant('contact.error'));
    } finally {
      this.sending = false;
    }
  }

  isFieldInvalid(field: string): boolean {
    const control = this.form.get(field);
    return !!control && control.invalid && control.touched;
  }
}
