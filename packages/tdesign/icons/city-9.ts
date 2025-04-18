import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCity9Icon],svg[tdesign-city-9-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.01 1.828l3.988 2.492l3.99-2.492l6.384 3.829l-1.029 1.715L21 7.166V22H2.997V7.166l-.343.206l-1.029-1.715zM4.996 5.967V20H7v-5h2v5h1.997V6.053l-3.01-1.88zM13 20h2v-5h2v5h2V5.967l-2.991-1.794l-3.01 1.88zM7 8.998h2.004v2.004H7zm8 0h2.004v2.004H15z"></svg:path>`,
})
export class TdesignCity9Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
