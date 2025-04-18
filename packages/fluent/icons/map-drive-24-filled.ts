import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMapDrive24FilledIcon],svg[fluent-map-drive-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5.25A2.25 2.25 0 0 1 4.25 3h15.5A2.25 2.25 0 0 1 22 5.25v5a.75.75 0 0 1-.75.75h-8.5v2.001h1a.75.75 0 0 1 .75.75v2.254h1.75a.75.75 0 0 1 .75.75v.745h4.25a.75.75 0 0 1 0 1.5H17v1.253a.75.75 0 0 1-.75.75h-8.5a.75.75 0 0 1-.75-.75V19H2.75a.75.75 0 0 1 0-1.5h4.251v-.745a.75.75 0 0 1 .75-.75h1.75V13.75a.75.75 0 0 1 .75-.75h.999v-2h-8.5a.75.75 0 0 1-.75-.75zm15.998 2.752a1.002 1.002 0 1 0 0-2.004a1.002 1.002 0 0 0 0 2.004"></svg:path>`,
})
export class FluentMapDrive24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
