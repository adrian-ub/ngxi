import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWeatherRainSnow48FilledIcon],svg[fluent-weather-rain-snow-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24.003 7c6.337 0 9.932 4.195 10.455 9.26h.16c4.078 0 7.384 3.298 7.384 7.365s-3.306 7.365-7.385 7.365h-2.704q.087.24.089.51a1.5 1.5 0 1 1-2.912-.51H18.557l-4.306 7.17a1.75 1.75 0 0 1-3.077-1.66l.076-.141l3.224-5.369h-1.085c-4.078 0-7.384-3.297-7.384-7.365s3.306-7.365 7.384-7.365h.16C14.074 11.161 17.666 7 24.003 7m-.416 27.27a1.75 1.75 0 0 1 .648 2.27l-.078.14l-.918 1.489a1.75 1.75 0 0 1-3.057-1.698l.078-.14l.918-1.49a1.75 1.75 0 0 1 2.409-.57m4.915.73a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m5-1a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></svg:path>`,
})
export class FluentWeatherRainSnow48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
