import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonArithmeticMeanIcon],svg[carbon-arithmetic-mean-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 9h-2l-6 8.571L10 9H8l7 10l-7 10h2l6-8.571L22 29h2l-7-10zM8 3h16v2H8z"></svg:path>`,
})
export class CarbonArithmeticMeanIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
