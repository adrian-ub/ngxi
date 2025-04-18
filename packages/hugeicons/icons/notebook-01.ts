import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsNotebook01Icon],svg[hugeicons-notebook-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 14v-4c0-3.771 0-5.657-1.172-6.828S17.771 2 14 2h-2C8.229 2 6.343 2 5.172 3.172S4 6.229 4 10v4c0 3.771 0 5.657 1.172 6.828S8.229 22 12 22h2c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14"></svg:path><svg:path d="M11.786 10h3.428c1.078 0 1.617 0 1.951-.293S17.5 8.943 17.5 8s0-1.414-.335-1.707C16.831 6 16.292 6 15.215 6h-3.43c-1.077 0-1.616 0-1.95.293C9.5 6.586 9.5 7.057 9.5 8s0 1.414.335 1.707c.334.293.873.293 1.95.293M5 6H2m3 6H2m3 6H2"></svg:path></svg:g>`,
})
export class HugeiconsNotebook01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
