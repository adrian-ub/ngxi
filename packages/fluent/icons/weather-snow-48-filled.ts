import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWeatherSnow48FilledIcon],svg[fluent-weather-snow-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.502 36a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m-13.5-2a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m-9-26c6.338 0 9.933 4.195 10.456 9.26h.16c4.078 0 7.384 3.298 7.384 7.365s-3.306 7.365-7.385 7.365H13.389c-4.078 0-7.384-3.297-7.384-7.365s3.306-7.365 7.384-7.365h.16C14.074 12.161 17.666 8 24.003 8"></svg:path>`,
})
export class FluentWeatherSnow48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
