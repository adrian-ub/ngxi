import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsImageIcon],svg[grommet-icons-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M1 3h22v18H1zm5 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm17 6l-5-6l-6 7l-3-3l-8 8"></svg:path>`,
})
export class GrommetIconsImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
