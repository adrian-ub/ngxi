import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignQrcodeIcon],svg[tdesign-qrcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h9v9H2zm2 2v5h5V4zm9-2h9v9h-9zm2 2v5h5V4zM5.5 5.5h2.004v2.004H5.5zm11 0h2.004v2.004H16.5zm-3.504 7.496H15V15h-2.004zm7 0H22V15h-2.004zM2 13h9v9H2zm2 2v5h5v-5zm11.996.996H18v2h2v2h2V22h-2.004v-2h-2v-2h-2zM5.5 16.5h2.004v2.004H5.5zm7.496 3.496H15V22h-2.004z"></svg:path>`,
})
export class TdesignQrcodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
