import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsAvoidanceIcon],svg[game-icons-avoidance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M323.9 45.2C269.6 171.8 229.2 213.1 114 258.1l-4.4-11.8l-8.4-22.5l-76.26 82.1l111.56 11.8l-12.1-32.1c119.5-46.5 171-99 226.6-228.84zm51.7 149l12 32.1c-119.5 46.6-171 99.1-226.6 228.8l27.1 11.7c54.3-126.7 94.7-167.9 209.9-212.9l4.4 11.8l8.4 22.4l76.3-82.1z"></svg:path>`,
})
export class GameIconsAvoidanceIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
