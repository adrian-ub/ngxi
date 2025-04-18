import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoTriangleDownIcon],svg[entypo-triangle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6h10l-5 9z"></svg:path>`,
})
export class EntypoTriangleDownIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
