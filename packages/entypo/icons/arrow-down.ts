import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoArrowDownIcon],svg[entypo-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 17.5L3.5 11H7V3h6v8h3.5z"></svg:path>`,
})
export class EntypoArrowDownIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
