import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoCircleWithMinusIcon],svg[entypo-circle-with-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 1.6a8.4 8.4 0 1 0 0 16.8a8.4 8.4 0 0 0 0-16.8m5 9.4H5V9h10z"></svg:path>`,
})
export class EntypoCircleWithMinusIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
