import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconPrayIcon],svg[picon-pray-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0v2H2V0m0 8l1-1h3v-.5H2V2l1 1h2V1h1v3H4L3 5h3l1 1v2"></svg:path>`,
})
export class PiconPrayIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
