import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoTriangleLeftIcon],svg[entypo-triangle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 5v10l-9-5z"></svg:path>`,
})
export class EntypoTriangleLeftIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
