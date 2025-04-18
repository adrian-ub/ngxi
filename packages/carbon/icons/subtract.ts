import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonSubtractIcon],svg[carbon-subtract-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 15h16v2H8z"></svg:path>`,
})
export class CarbonSubtractIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
