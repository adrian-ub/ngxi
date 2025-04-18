import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2HistoricalWeatherIcon],svg[fluent-mdl2-historical-weather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 1664h1920v128H0V256h128v441l525-263l340 340l459 115l487-486l90 90l-537 538l-565-141l-300-300l-499 249v297l520-115l519 259h354l434-217l58 114l-462 231h-414l-505-253l-504 112z"></svg:path>`,
})
export class FluentMdl2HistoricalWeatherIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
