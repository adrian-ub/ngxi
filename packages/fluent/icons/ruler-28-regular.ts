import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRuler28RegularIcon],svg[fluent-ruler-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.75 2A2.75 2.75 0 0 0 8 4.75v18.5A2.75 2.75 0 0 0 10.75 26h6.5A2.75 2.75 0 0 0 20 23.25V4.75A2.75 2.75 0 0 0 17.25 2zM9.5 14.75h2.75a.75.75 0 0 0 0-1.5H9.5V11h4.75a.75.75 0 0 0 0-1.5H9.5V7.25h2.75a.75.75 0 0 0 0-1.5H9.5v-1c0-.69.56-1.25 1.25-1.25h6.5c.69 0 1.25.56 1.25 1.25v18.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1h2.75a.75.75 0 0 0 0-1.5H9.5V18.5h4.75a.75.75 0 0 0 0-1.5H9.5z"></svg:path>`,
})
export class FluentRuler28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
