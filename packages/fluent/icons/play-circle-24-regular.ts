import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPlayCircle24RegularIcon],svg[fluent-play-circle-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.856 8.155A1.25 1.25 0 0 0 9 9.248v5.504a1.25 1.25 0 0 0 1.856 1.093l5.757-3.189a.75.75 0 0 0 0-1.312zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M3.5 12a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0"></svg:path>`,
})
export class FluentPlayCircle24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
