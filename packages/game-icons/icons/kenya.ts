import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsKenyaIcon],svg[game-icons-kenya-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M410.7 119.7v182.1l27.4 25.9l-105.9 154.6l-73.9-41.8l-5.4-39.7L74.66 296.4l36.64-29L62.47 253l50.33-78.4l-.8-61.8l-47.25-60.96l38.15-19.05l99-3.05S307.1 83.8 310.1 83.09c3.1-.81 91.5-36.58 91.5-36.58l47.9 23.61z"></svg:path>`,
})
export class GameIconsKenyaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
