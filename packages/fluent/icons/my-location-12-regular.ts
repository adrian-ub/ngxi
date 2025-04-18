import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMyLocation12RegularIcon],svg[fluent-my-location-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-.5-5.97V.5a.5.5 0 0 1 1 0v1.53A4 4 0 0 1 9.969 5.5H11.5a.5.5 0 0 1 0 1H9.969a4 4 0 0 1-3.47 3.47L6.5 10v1.5a.5.5 0 0 1-1 0V9.97A4 4 0 0 1 2.03 6.5H.5a.5.5 0 0 1 0-1h1.53A4 4 0 0 1 5.5 2.032M3 6a3 3 0 1 0 6 0a3 3 0 0 0-6 0"></svg:path>`,
})
export class FluentMyLocation12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
