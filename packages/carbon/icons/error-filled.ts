import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonErrorFilledIcon],svg[carbon-error-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M9 10.555L10.555 9L23 21.444L21.444 23z"></svg:path><svg:path fill="currentColor" d="M16 2A13.914 13.914 0 0 0 2 16a13.914 13.914 0 0 0 14 14a13.914 13.914 0 0 0 14-14A13.914 13.914 0 0 0 16 2m5.445 21L9 10.556L10.556 9L23 21.445Z"></svg:path>`,
})
export class CarbonErrorFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
