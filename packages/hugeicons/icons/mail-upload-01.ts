import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMailUpload01Icon],svg[hugeicons-mail-upload-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13.5 19.49c-1.467.02-2.929.01-4.401-.027c-3.149-.079-4.723-.118-5.854-1.254c-1.131-1.135-1.164-2.668-1.23-5.733a69 69 0 0 1 0-2.952c.066-3.065.099-4.598 1.23-5.733C4.376 2.655 5.95 2.616 9.099 2.537a115 115 0 0 1 5.802 0c3.149.079 4.723.118 5.854 1.254c1.131 1.135 1.164 2.668 1.23 5.733Q22 10.264 22 11"></svg:path><svg:path d="m2 5l6.913 3.925c2.526 1.433 3.648 1.433 6.174 0L22 5m-6 11c.491-.506 1.8-2.5 2.5-2.5M21 16c-.491-.506-1.8-2.5-2.5-2.5m0 0v8"></svg:path></svg:g>`,
})
export class HugeiconsMailUpload01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
