import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonErrorOutlineIcon],svg[carbon-error-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 10.555L10.555 9L23 21.444L21.444 23z"></svg:path><svg:path fill="currentColor" d="M16 2A13.914 13.914 0 0 0 2 16a13.914 13.914 0 0 0 14 14a13.914 13.914 0 0 0 14-14A13.914 13.914 0 0 0 16 2m0 26a12 12 0 1 1 12-12a12.035 12.035 0 0 1-12 12"></svg:path>`,
})
export class CarbonErrorOutlineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
