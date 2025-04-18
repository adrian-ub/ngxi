import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxExpandAltIcon],svg[bx-expand-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 12H3v9h9v-2H5zm7-7h7v7h2V3h-9z"></svg:path>`,
})
export class BxExpandAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
