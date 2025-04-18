import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsFloatingPlatformsIcon],svg[game-icons-floating-platforms-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 43.5v18h144l-.1-18zm24 95.9l-144 .1v18l144-.1zm96.1 0v18l143.9.1v-18.1zm168.4 98.1l-435.63.1L128 372.5l10.9-32l21.1 80l32-52.5l48 128l80-107.5l32 16z"></svg:path>`,
})
export class GameIconsFloatingPlatformsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
