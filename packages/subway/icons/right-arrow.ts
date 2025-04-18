import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayRightArrowIcon],svg[subway-right-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M315.1 48.6H196.9l157.6 157.5H0v78.8h354.5L196.9 442.4h118.2L512 245.5z"></svg:path>`,
})
export class SubwayRightArrowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
