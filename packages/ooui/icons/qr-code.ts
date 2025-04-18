import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiQrCodeIcon],svg[ooui-qr-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3H3v4h4zm6 0v4h4V3zM7 13H3v4h4zm8 0v-2h4v2h-2v4h-2v2h4v-4h-4v2h-4v2h2v-4h-2v-4h2v2zm-4-4V1h8v8zM1 9V1h8v8zm0 2h8v8H1z"></svg:path>`,
})
export class OouiQrCodeIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
