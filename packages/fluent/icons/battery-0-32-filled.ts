import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBattery032FilledIcon],svg[fluent-battery-0-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 8A4.5 4.5 0 0 0 2 12.5v7A4.5 4.5 0 0 0 6.5 24h17a4.5 4.5 0 0 0 4.5-4.5V19h.5a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5H28v-.5A4.5 4.5 0 0 0 23.5 8z"></svg:path>`,
})
export class FluentBattery032FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
