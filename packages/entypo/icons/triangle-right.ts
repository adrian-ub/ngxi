import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoTriangleRightIcon],svg[entypo-triangle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 10l-9 5V5z"></svg:path>`,
})
export class EntypoTriangleRightIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
