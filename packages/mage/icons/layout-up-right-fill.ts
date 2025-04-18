import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageLayoutUpRightFillIcon],svg[mage-layout-up-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.97 8.17H2.03A6.76 6.76 0 0 1 8.75 2h6.5a6.76 6.76 0 0 1 6.72 6.17m-7.64 2V22H8.75A6.76 6.76 0 0 1 2 15.25v-5.08zm7.67 0v5.08a6.74 6.74 0 0 1-5.67 6.65V10.17z"></svg:path>`,
})
export class MageLayoutUpRightFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
