import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPhone28RegularIcon],svg[fluent-phone-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.75 2A2.75 2.75 0 0 0 7 4.75v18.5A2.75 2.75 0 0 0 9.75 26h8.5A2.75 2.75 0 0 0 21 23.25V4.75A2.75 2.75 0 0 0 18.25 2zM8.5 4.75c0-.69.56-1.25 1.25-1.25h8.5c.69 0 1.25.56 1.25 1.25v18.5c0 .69-.56 1.25-1.25 1.25h-8.5c-.69 0-1.25-.56-1.25-1.25zM12.25 21a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class FluentPhone28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
