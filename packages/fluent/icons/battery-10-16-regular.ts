import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBattery1016RegularIcon],svg[fluent-battery-10-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6h7.5v4H4zm9.5.5h.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-.5v.5c0 1.103-.897 2-2 2H4c-1.103 0-2-.897-2-2V6c0-1.103.897-2 2-2h7.5c1.103 0 2 .897 2 2zm-2 4.5a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1z"></svg:path>`,
})
export class FluentBattery1016RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
