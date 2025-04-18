import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCloudySunnyIcon],svg[tdesign-cloudy-sunny-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.004 1v2.004H15V1zm-5.952 1.635l1.418 1.417l-1.417 1.417l-1.417-1.417zm9.9 0l1.415 1.416l-1.415 1.417l-1.418-1.416zm-8.993 3.42a5 5 0 0 1 8.238 5.663c1.101.97 1.803 2.374 1.803 3.949C22 18.647 19.502 21 16.5 21H6.6C4.095 21 2 19.036 2 16.534c0-1.83 1.125-3.376 2.706-4.071A6 6 0 0 1 4.7 12.2C4.7 8.74 7.601 6 11.1 6q.436 0 .859.056m2.108.65c1.492.758 2.646 2.073 3.152 3.674q.659.084 1.26.31a3 3 0 0 0-4.413-3.984M11.1 8c-2.466 0-4.4 1.916-4.4 4.2q0 .394.073.766l.184.955l-.95.21C4.832 14.391 4 15.391 4 16.534C4 17.86 5.128 19 6.6 19h9.9c1.969 0 3.5-1.527 3.5-3.333c0-1.216-.686-2.297-1.741-2.883a3.6 3.6 0 0 0-1.818-.45l-.854.013l-.147-.841c-.282-1.622-1.55-2.956-3.234-3.372A4.6 4.6 0 0 0 11.1 8M22 8h2.004v2.004H22z"></svg:path>`,
})
export class TdesignCloudySunnyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
