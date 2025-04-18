import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsQrcodeLineIcon],svg[majesticons-qrcode-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M3 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5zm4 0H5v2h2V5zm5-2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1zm3 2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V5zm4 0h-2v2h2V5zm-7 3a1 1 0 0 1 1 1v2h1a1 1 0 1 1 0 2h-1a2 2 0 0 1-2-2V9a1 1 0 0 1 1-1zm-9 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm14 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1zM3 17a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2zm4 0H5v2h2v-2zm4 0a2 2 0 0 1 2-2h1a1 1 0 1 1 0 2h-1v3a1 1 0 1 1-2 0v-3zm6-1a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1zm-2 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1z"></svg:path></svg:g>`,
})
export class MajesticonsQrcodeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
