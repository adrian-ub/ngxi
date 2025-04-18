import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCertificate02Icon],svg[hugeicons-certificate-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9 5.026c-1.577-.423-4.348-1.566-5.838-.725c-1.55.874-1.55 6.524 0 7.398c1.49.84 4.261-.302 5.838-.726m6-5.947c1.576-.423 4.348-1.566 5.838-.725c1.55.874 1.55 6.524 0 7.398c-1.49.84-4.262-.302-5.838-.726"></svg:path><svg:circle cx="12" cy="8" r="4"></svg:circle><svg:path d="m9.772 11l-1.427 6.375c-.331 1.48-.497 2.22-.16 2.462c1.15.824 2.574-1.74 3.815-1.74c1.13 0 2.817 2.455 3.816 1.74c.336-.241.17-.982-.161-2.462L14.228 11"></svg:path></svg:g>`,
})
export class HugeiconsCertificate02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
