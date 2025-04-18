import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsPlainSquareIcon],svg[game-icons-plain-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.05 23.05V488.9H488.9V23.05z"></svg:path>`,
})
export class GameIconsPlainSquareIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
