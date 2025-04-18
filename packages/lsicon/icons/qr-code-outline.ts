import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconQrCodeOutlineIcon],svg[lsicon-qr-code-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M9 9.5h1.5m0 0H12m-1.5 0V11m3-2v2m-2.5.5h2m.5.5v1.5m0 0v.5m0-.5H12M9.5 11v2.5m0 0v.5m0-.5H11m-8.5 0h4v-4h-4zm0-7h4v-4h-4zm7 0h4v-4h-4z"></svg:path>`,
})
export class LsiconQrCodeOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
