import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonFlagIcon],svg[carbon-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 30H4V2h24l-5.8 9l5.8 9H6Zm0-12h18.33l-4.53-7l4.53-7H6Z"></svg:path>`,
})
export class CarbonFlagIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
