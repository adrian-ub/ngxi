import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoArrowRightIcon],svg[entypo-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 16.5V13H3V7h8V3.5l6.5 6.5z"></svg:path>`,
})
export class EntypoArrowRightIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
