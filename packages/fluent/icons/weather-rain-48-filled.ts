import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWeatherRain48FilledIcon],svg[fluent-weather-rain-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.999 7c6.337 0 9.932 4.195 10.455 9.26h.16c4.078 0 7.384 3.298 7.384 7.365s-3.306 7.365-7.384 7.365h-.067l-4.3 7.159a1.75 1.75 0 0 1-3.075-1.662l.075-.14l3.217-5.357h-3.917l-4.3 7.159a1.75 1.75 0 0 1-3.075-1.662l.075-.14l3.217-5.357h-3.917l-4.3 7.159a1.75 1.75 0 0 1-3.075-1.662l.075-.14l3.217-5.357h-1.08C9.306 30.99 6 27.693 6 23.625s3.306-7.365 7.384-7.365h.16C14.07 11.161 17.662 7 24 7"></svg:path>`,
})
export class FluentWeatherRain48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
