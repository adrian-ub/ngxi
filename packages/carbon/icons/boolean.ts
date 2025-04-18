import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonBooleanIcon],svg[carbon-boolean-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 23a7 7 0 1 1 7-7a7.01 7.01 0 0 1-7 7m0-12a5 5 0 1 0 5 5a5.006 5.006 0 0 0-5-5"></svg:path><svg:circle cx="9" cy="16" r="7" fill="currentColor"></svg:circle>`,
})
export class CarbonBooleanIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
