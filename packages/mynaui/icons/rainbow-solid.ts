import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiRainbowSolidIcon],svg[mynaui-rainbow-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7.25a8.25 8.25 0 0 0-8.25 8.25v2a.75.75 0 0 1-1.5 0v-2c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75v2a.75.75 0 0 1-1.5 0v-2A8.25 8.25 0 0 0 12 7.25m0 3a5.25 5.25 0 0 0-5.25 5.25v2a.75.75 0 0 1-1.5 0v-2a6.75 6.75 0 0 1 13.5 0v2a.75.75 0 0 1-1.5 0v-2c0-2.9-2.35-5.25-5.25-5.25m0 3a2.25 2.25 0 0 0-2.25 2.25v2a.75.75 0 0 1-1.5 0v-2a3.75 3.75 0 1 1 7.5 0v2a.75.75 0 0 1-1.5 0v-2A2.25 2.25 0 0 0 12 13.25"></svg:path>`,
})
export class MynauiRainbowSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
