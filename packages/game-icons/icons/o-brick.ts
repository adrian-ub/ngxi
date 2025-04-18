import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsOBrickIcon],svg[game-icons-o-brick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M150.5 141a9.5 9.5 0 0 0-9.5 9.5v96a9.5 9.5 0 0 0 9.5 9.5a9.5 9.5 0 0 0-9.5 9.5v96a9.5 9.5 0 0 0 9.5 9.5h96a9.5 9.5 0 0 0 9.5-9.5a9.5 9.5 0 0 0 9.5 9.5h96a9.5 9.5 0 0 0 9.5-9.5v-96a9.5 9.5 0 0 0-9.5-9.5a9.5 9.5 0 0 0 9.5-9.5v-96a9.5 9.5 0 0 0-9.5-9.5h-96a9.5 9.5 0 0 0-9.5 9.5a9.5 9.5 0 0 0-9.5-9.5zm9.5 19h77v77h-77zm115 0h77v77h-77zm-19 86.5a9.5 9.5 0 0 0 9.5 9.5a9.5 9.5 0 0 0-9.5 9.5a9.5 9.5 0 0 0-9.5-9.5a9.5 9.5 0 0 0 9.5-9.5M160 275h77v77h-77zm115 0h77v77h-77z"></svg:path>`,
})
export class GameIconsOBrickIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
