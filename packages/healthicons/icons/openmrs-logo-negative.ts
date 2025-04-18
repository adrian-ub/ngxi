import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsOpenmrsLogoNegativeIcon],svg[healthicons-openmrs-logo-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsOpenmrsLogoNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM15.768 15.768a11.62 11.62 0 0 1 8.244-3.414a11.62 11.62 0 0 1 8.226 3.398l.008-7.763A17.9 17.9 0 0 0 24.012 6c-2.968 0-5.784.808-8.253 2.08zm16.47 16.465a11.62 11.62 0 0 1-8.242 3.413c-3.212 0-6.12-1.298-8.228-3.398l-.009 7.763a17.94 17.94 0 0 0 8.237 1.99a17.9 17.9 0 0 0 8.235-1.99zm-19.885-8.241c0 3.22 1.305 6.133 3.414 8.241l-7.778-.005A17.9 17.9 0 0 1 6 23.992c0-2.968.718-5.768 1.989-8.236l7.763.008a11.63 11.63 0 0 0-3.399 8.228m19.88-8.236a11.62 11.62 0 0 1 3.414 8.243c0 3.211-1.299 6.12-3.399 8.226l7.763.009a17.9 17.9 0 0 0 1.99-8.235a17.9 17.9 0 0 0-1.99-8.237z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsOpenmrsLogoNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsOpenmrsLogoNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
