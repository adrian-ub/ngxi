import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentShiftsOpen20RegularIcon],svg[fluent-shifts-open-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5.5A1.5 1.5 0 0 1 5.5 4h2a.5.5 0 0 0 0-1h-2A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h2a.5.5 0 0 0 0-1h-2A1.5 1.5 0 0 1 4 14.5zM12.5 3a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 1 16 5.5v9a1.5 1.5 0 0 1-1.5 1.5h-2a.5.5 0 0 0 0 1h2a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 14.5 3zM10 5.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1H10z"></svg:path>`,
})
export class FluentShiftsOpen20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
