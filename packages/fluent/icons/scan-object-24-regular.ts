import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentScanObject24RegularIcon],svg[fluent-scan-object-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.25 3.5A1.75 1.75 0 0 0 3.5 5.25v3a.75.75 0 0 1-1.5 0v-3A3.25 3.25 0 0 1 5.25 2h3a.75.75 0 0 1 0 1.5zm0 17a1.75 1.75 0 0 1-1.75-1.75v-3a.75.75 0 0 0-1.5 0v3A3.25 3.25 0 0 0 5.25 22h3a.75.75 0 0 0 0-1.5zM20.5 5.25a1.75 1.75 0 0 0-1.75-1.75h-3a.75.75 0 0 1 0-1.5h3A3.25 3.25 0 0 1 22 5.25v3a.75.75 0 0 1-1.5 0zM18.75 20.5a1.75 1.75 0 0 0 1.75-1.75v-3a.75.75 0 0 1 1.5 0v3A3.25 3.25 0 0 1 18.75 22h-3a.75.75 0 0 1 0-1.5zM10.18 8.227a2.25 2.25 0 0 1 3.64 0l3.054 4.2c1.081 1.487.019 3.573-1.82 3.573H8.945c-1.838 0-2.9-2.086-1.82-3.573zm2.426.882a.75.75 0 0 0-1.213 0l-3.054 4.2a.75.75 0 0 0 .606 1.191h6.11a.75.75 0 0 0 .606-1.191z"></svg:path>`,
})
export class FluentScanObject24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
