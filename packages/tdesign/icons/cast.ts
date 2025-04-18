import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCastIcon],svg[tdesign-cast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3h22v18H13v-2h8V5H3v4H1zm0 8h1a9 9 0 0 1 9 9v1H9v-1a7 7 0 0 0-7-7H1zm0 4h1a5 5 0 0 1 5 5v1H5v-1a3 3 0 0 0-3-3H1zm0 4h2.004v2.004H1z"></svg:path>`,
})
export class TdesignCastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
