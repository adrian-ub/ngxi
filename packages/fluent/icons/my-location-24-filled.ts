import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMyLocation24FilledIcon],svg[fluent-my-location-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a1 1 0 0 1 .993.883L13 3v1.314a7.754 7.754 0 0 1 6.686 6.687L21 11a1 1 0 0 1 .117 1.993L21 13h-1.314A7.754 7.754 0 0 1 13 19.686V21a1 1 0 0 1-1.993.117L11 21v-1.314A7.754 7.754 0 0 1 4.315 13H3a1 1 0 0 1-.117-1.993L3 11h1.314A7.754 7.754 0 0 1 11 4.315V3a1 1 0 0 1 1-1m0 4.25a5.75 5.75 0 1 0 0 11.5a5.75 5.75 0 0 0 0-11.5M12 8a4 4 0 1 1 0 8a4 4 0 0 1 0-8"></svg:path>`,
})
export class FluentMyLocation24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
