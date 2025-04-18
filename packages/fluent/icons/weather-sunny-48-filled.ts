import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWeatherSunny48FilledIcon],svg[fluent-weather-sunny-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.999 4.001c.69 0 1.25.56 1.25 1.25v2.5a1.25 1.25 0 0 1-2.5 0v-2.5c0-.69.56-1.25 1.25-1.25m10.023 20.046c0 5.509-4.466 9.975-9.975 9.975c-5.51 0-9.976-4.466-9.976-9.975c0-5.51 4.466-9.976 9.976-9.976c5.509 0 9.975 4.466 9.975 9.976m8.728 1.203a1.25 1.25 0 0 0 0-2.5h-2.5a1.25 1.25 0 0 0 0 2.5zM23.999 39c.69 0 1.25.56 1.25 1.25v2.5a1.25 1.25 0 0 1-2.5 0v-2.5c0-.69.56-1.25 1.25-1.25M7.75 25.25a1.25 1.25 0 1 0 0-2.5h-2.5a1.25 1.25 0 0 0 0 2.5zM9.366 9.366a1.25 1.25 0 0 1 1.768 0l2.5 2.5a1.25 1.25 0 1 1-1.768 1.768l-2.5-2.5a1.25 1.25 0 0 1 0-1.768m1.768 29.269a1.25 1.25 0 1 1-1.768-1.768l2.5-2.5a1.25 1.25 0 1 1 1.768 1.768zm27.5-29.269a1.25 1.25 0 0 0-1.767 0l-2.5 2.5a1.25 1.25 0 0 0 1.768 1.768l2.5-2.5a1.25 1.25 0 0 0 0-1.768m-1.767 29.269a1.25 1.25 0 1 0 1.768-1.768l-2.5-2.5a1.25 1.25 0 1 0-1.768 1.768z"></svg:path>`,
})
export class FluentWeatherSunny48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
