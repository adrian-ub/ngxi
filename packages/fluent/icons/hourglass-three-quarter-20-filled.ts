import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHourglassThreeQuarter20FilledIcon],svg[fluent-hourglass-three-quarter-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.163 5h7.68a4 4 0 0 1-.153.4a3.4 3.4 0 0 1-.91 1.16L11 8.09a2.45 2.45 0 0 0-.65.85a2.4 2.4 0 0 0-.29 1.06c.014.37.113.734.29 1.06c.151.328.373.618.65.85l1.78 1.53c.385.315.696.71.91 1.16c.2.44.305.917.31 1.4H6a3.4 3.4 0 0 1 .32-1.4a3.25 3.25 0 0 1 .9-1.16l1.82-1.52a2.5 2.5 0 0 0 .66-.86c.16-.33.241-.693.24-1.06a2.4 2.4 0 0 0-.24-1.06a2.5 2.5 0 0 0-.66-.86L7.22 6.56a3.25 3.25 0 0 1-.9-1.16a3 3 0 0 1-.157-.4"></svg:path>`,
})
export class FluentHourglassThreeQuarter20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
