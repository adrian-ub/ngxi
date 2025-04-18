import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWeatherSnow20FilledIcon],svg[fluent-weather-snow-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 15a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1M7 14a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1M10 4c2.465 0 3.863 1.574 4.066 3.474h.062c1.586 0 2.872 1.237 2.872 2.763S15.714 13 14.128 13H5.872C4.286 13 3 11.763 3 10.237c0-1.47 1.192-2.671 2.697-2.758l.237-.005C6.139 5.561 7.535 4 10 4"></svg:path>`,
})
export class FluentWeatherSnow20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
