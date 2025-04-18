import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsQrCodeLineIcon],svg[majesticons-qr-code-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 18v2h-2m2-6h-1l-2 2m-1 2h-2v2M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 0v1h1v-1zm3-7h.001M7 7h.001M7 17h.001"></svg:path>`,
})
export class MajesticonsQrCodeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
