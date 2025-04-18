import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageLayoutRightFillIcon],svg[mage-layout-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8.75v6.5a6.75 6.75 0 0 1-5.92 6.69V2.06A6.75 6.75 0 0 1 22 8.75M14.08 2v20H8.75A6.76 6.76 0 0 1 2 15.25v-6.5A6.76 6.76 0 0 1 8.75 2z"></svg:path>`,
})
export class MageLayoutRightFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
