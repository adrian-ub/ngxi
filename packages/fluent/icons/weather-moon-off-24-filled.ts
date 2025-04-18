import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWeatherMoonOff24FilledIcon],svg[fluent-weather-moon-off-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l8.193 8.193c-1.177 2.197-3.192 3.741-6.919 5.075a.75.75 0 0 0-.365 1.132a10 10 0 0 0 3.235 2.982c3.917 2.262 8.728 1.572 11.859-1.378l2.496 2.497a.75.75 0 0 0 1.061-1.061zm13.085 1.119c4.75 2.743 6.4 8.794 3.718 13.562l-8.59-8.59c.251-1.561.151-3.303-.354-5.373a.75.75 0 0 1 .769-.926a9.96 9.96 0 0 1 4.457 1.327"></svg:path>`,
})
export class FluentWeatherMoonOff24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
