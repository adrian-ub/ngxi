import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageLayoutUpLeftFillIcon],svg[mage-layout-up-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.97 8.17H2.03A6.76 6.76 0 0 1 8.75 2h6.5a6.76 6.76 0 0 1 6.72 6.17m-13.8 2v11.8A6.76 6.76 0 0 1 2 15.25v-5.08zm13.83 0v5.08A6.76 6.76 0 0 1 15.25 22h-5.08V10.17z"></svg:path>`,
})
export class MageLayoutUpLeftFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
