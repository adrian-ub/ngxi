import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWeatherPartlyCloudyDay16FilledIcon],svg[fluent-weather-partly-cloudy-day-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.999 6a3.5 3.5 0 0 0-3.464 3H5.5a2.5 2.5 0 0 0 0 5h7a2.5 2.5 0 0 0 0-5h-.037A3.5 3.5 0 0 0 9 6m-.212-3.18a.5.5 0 1 0-.883-.47l-.426.803a.5.5 0 0 0 .883.47zm-3.772-.747a.5.5 0 1 0-.957.293l.267.87a.5.5 0 0 0 .956-.293zM3 7c0 .604.179 1.166.486 1.637c.367-.259.787-.45 1.24-.551a4.51 4.51 0 0 1 3.56-3.03A3 3 0 0 0 3 7M1.82 4.214a.5.5 0 1 0-.47.883l.803.426a.5.5 0 0 0 .47-.883zm.416 4.463a.5.5 0 0 0-.293-.956l-.87.266a.5.5 0 1 0 .293.956z"></svg:path>`,
})
export class FluentWeatherPartlyCloudyDay16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
