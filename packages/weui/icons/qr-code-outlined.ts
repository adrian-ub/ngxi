import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiQrCodeOutlinedIcon],svg[weui-qr-code-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 19h2v2h-2zm8-8h2v2h-2zm-8 4h2v2h-2zm4-4h2v2h-2zM4 3h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m.2 1.2v7.6h7.6V4.2zM7 7h2v2H7zm9-4h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m.2 4.8h3.6V4.2h-3.6zM16 15h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1m.2 4.8h3.6v-3.6h-3.6zM4 15h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1m.2 4.8h3.6v-3.6H4.2z"></svg:path>`,
})
export class WeuiQrCodeOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
