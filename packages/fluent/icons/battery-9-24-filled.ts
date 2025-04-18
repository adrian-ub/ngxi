import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBattery924FilledIcon],svg[fluent-battery-9-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 9a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zM2 9a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v1h.5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-.5v1a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3z"></svg:path>`,
})
export class FluentBattery924FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
