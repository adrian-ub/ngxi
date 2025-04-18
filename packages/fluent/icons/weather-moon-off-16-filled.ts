import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWeatherMoonOff16FilledIcon],svg[fluent-weather-moon-off-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.616 12.324l2.53 2.53a.5.5 0 0 0 .708-.708l-13-13a.5.5 0 1 0-.708.708L6.38 7.087c-.86 1.93-2.748 2.586-3.97 2.808a.5.5 0 0 0-.36.71a6 6 0 0 0 9.566 1.718M13.456 8c0 .97-.23 1.886-.638 2.696L6.916 4.795a8.8 8.8 0 0 0-.145-2.2a.5.5 0 0 1 .475-.591Q7.35 2 7.456 2a6 6 0 0 1 6 6"></svg:path>`,
})
export class FluentWeatherMoonOff16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
