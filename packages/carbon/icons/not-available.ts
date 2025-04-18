import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonNotAvailableIcon],svg[carbon-not-available-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 15h10v2H4zm14 0h10v2H18z"></svg:path>`,
})
export class CarbonNotAvailableIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
