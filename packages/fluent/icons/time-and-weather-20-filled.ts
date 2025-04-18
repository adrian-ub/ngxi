import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTimeAndWeather20FilledIcon],svg[fluent-time-and-weather-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 2.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0zm-5 7.5a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0M10 8.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 .5.5H11a.5.5 0 0 0 0-1h-1zm0 7.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5M2.5 9.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zM16 10a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5M4.146 15.146a.5.5 0 0 0 .708.708l1-1a.5.5 0 0 0-.708-.708zm10-10l1-1a.5.5 0 0 1 .708.708l-1 1a.5.5 0 0 1-.708-.708m-9.292-1a.5.5 0 1 0-.708.708l1 1a.5.5 0 1 0 .708-.708zm10 10l1 1a.5.5 0 0 1-.708.708l-1-1a.5.5 0 0 1 .708-.708"></svg:path>`,
})
export class FluentTimeAndWeather20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
