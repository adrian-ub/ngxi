import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoArrowLongLeftIcon],svg[entypo-arrow-long-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.75 10L6 4.5V8h13v4H6v3.5z"></svg:path>`,
})
export class EntypoArrowLongLeftIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
