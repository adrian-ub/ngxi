import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggQrIcon],svg[gg-qr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 3H3v6h2V5h4zM3 21v-6h2v4h4v2zM15 3v2h4v4h2V3zm4 12h2v6h-6v-2h4zM7 7h4v4H7zm0 6h4v4H7zm10-6h-4v4h4zm-4 6h4v4h-4z" clip-rule="evenodd"></svg:path>`,
})
export class GgQrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
