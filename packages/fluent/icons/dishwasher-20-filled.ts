import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDishwasher20FilledIcon],svg[fluent-dishwasher-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3a3 3 0 0 0-3 3v2h14V6a3 3 0 0 0-3-3zm8 14H6.915A1.5 1.5 0 0 0 6 16.085v-1.422A3.5 3.5 0 0 0 8 11.5v-2a1.5 1.5 0 0 0-.086-.5H17v5a3 3 0 0 1-3 3M6.75 6.25a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5M10 5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M2.5 9a.5.5 0 0 0-.5.5v2a2.5 2.5 0 0 0 2 2.45V17h-.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H5v-3.05a2.5 2.5 0 0 0 2-2.45v-2a.5.5 0 0 0-.5-.5z"></svg:path>`,
})
export class FluentDishwasher20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
