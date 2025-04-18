import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBluetooth20RegularIcon],svg[fluent-bluetooth-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.309 2.038a.5.5 0 0 1 .545.108l4 4a.5.5 0 0 1-.025.73L10.26 10l3.57 3.124a.5.5 0 0 1 .025.73l-4 4A.5.5 0 0 1 9 17.5v-6.398l-3.17 2.774a.5.5 0 0 1-.66-.752L8.74 10L5.17 6.876a.5.5 0 0 1 .66-.752L9 8.898V2.5a.5.5 0 0 1 .309-.462M10 11.102v5.19l2.768-2.768zm0-2.204l2.768-2.422L10 3.707z"></svg:path>`,
})
export class FluentBluetooth20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
