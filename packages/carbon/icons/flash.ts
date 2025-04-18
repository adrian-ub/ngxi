import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonFlashIcon],svg[carbon-flash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.61 29.92a1 1 0 0 1-.6-1.07L12.83 17H8a1 1 0 0 1-1-1.23l3-13A1 1 0 0 1 11 2h10a1 1 0 0 1 .78.37a1 1 0 0 1 .2.85L20.25 11H25a1 1 0 0 1 .9.56a1 1 0 0 1-.11 1l-13 17A1 1 0 0 1 12 30a1.1 1.1 0 0 1-.39-.08M17.75 13l2-9H11.8L9.26 15h5.91l-1.59 10.28L23 13Z"></svg:path>`,
})
export class CarbonFlashIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
