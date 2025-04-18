import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonFlagFilledIcon],svg[carbon-flag-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 30H4V2h24l-5.8 9l5.8 9H6Z"></svg:path>`,
})
export class CarbonFlagFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
