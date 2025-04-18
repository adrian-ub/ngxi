import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsShieldIcon],svg[game-icons-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 16c25 24 100 72 150 72v96c0 96-75 240-150 312c-75-72-150-216-150-312V88c50 0 125-48 150-72"></svg:path>`,
})
export class GameIconsShieldIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
