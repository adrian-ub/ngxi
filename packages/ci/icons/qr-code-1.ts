import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciQrCode1Icon],svg[ci-qr-code-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 11V3h8v8H3Zm3-5v2h2V6H6Zm7 5V3h8v8h-8Zm3-5v2h2V6h-2ZM3 13v8h8v-8H3Zm5 3v2H6v-2h2Zm8-3h-3v2h3v4h-1v-2h-2v4h4v-2h2v2h2v-3h-2v-1h-1v-1h3v-3h-3v2h-2v-2Z"></svg:path>`,
})
export class CiQrCode1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
