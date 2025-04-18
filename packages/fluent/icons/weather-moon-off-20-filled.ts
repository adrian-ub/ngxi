import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWeatherMoonOff20FilledIcon],svg[fluent-weather-moon-off-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.854 2.146a.5.5 0 1 0-.708.708L8.752 9.46l-.035.069c-.935 1.783-2.545 3.03-5.551 4.106a.598.598 0 0 0-.292.903a7.985 7.985 0 0 0 12.143 1.186l2.13 2.13a.5.5 0 0 0 .707-.708l-2.165-2.165l-6.507-6.506zm13.504 11.851l-.089.15l-6.777-6.776c.268-1.324.211-2.807-.226-4.596a.598.598 0 0 1 .614-.74a7.98 7.98 0 0 1 6.478 11.962"></svg:path>`,
})
export class FluentWeatherMoonOff20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
