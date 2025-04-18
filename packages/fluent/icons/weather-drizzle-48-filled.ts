import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWeatherDrizzle48FilledIcon],svg[fluent-weather-drizzle-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.999 6c6.337 0 9.932 4.195 10.455 9.26h.16c4.078 0 7.384 3.298 7.384 7.365s-3.306 7.365-7.384 7.365l-1.723.001l-.004.009h-.586l-1.971 3.38a1.25 1.25 0 1 1-2.16-1.26l1.243-2.13l-4.259.001l-.003.009h-.85l-1.971 3.38a1.25 1.25 0 1 1-2.16-1.26l1.243-2.13l-3.995.001l-.003.009h-1.113l-1.972 3.38a1.25 1.25 0 1 1-2.16-1.26l1.243-2.13h-.029C9.306 29.99 6 26.693 6 22.625s3.306-7.365 7.384-7.365h.16C14.07 10.161 17.662 6 24 6m-6.37 28.67a1.25 1.25 0 0 1 .45 1.71l-1.75 3a1.25 1.25 0 1 1-2.159-1.26l1.75-3a1.25 1.25 0 0 1 1.71-.45m8.45 1.71a1.25 1.25 0 1 0-2.159-1.26l-1.75 3a1.25 1.25 0 1 0 2.16 1.26z"></svg:path>`,
})
export class FluentWeatherDrizzle48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
