import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsPolandIcon],svg[game-icons-poland-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 100.9l198.4-68.89c9.4 24.82 24.8 41.58 58.1 34.5h165.8l42.5 130.09l-42.5 31.6l25.8 10.4L493 368.2l-68.5 68.4l7.4 43.4l-52.3-34.5h-76l-17.2 16.7l-17.4-34.1c-49.6-11.2-85-35.6-120.4-63.1l-10 28.7l-24.5-34.3l-59.16-28.1C31.42 248.1 24.77 174.3 19 100.9"></svg:path>`,
})
export class GameIconsPolandIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
