import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsParaguayIcon],svg[game-icons-paraguay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30.6 191.3L74.85 34.64C143.1 9.374 223.8 16.21 284.1 36.89l3 143.21l114 11.2l25.5 100.5l54.8-5.2l-27 154.5l-81.8 56.2l-125.2-18l57.7-110.2C192.5 316.9 84.23 263.2 30.6 191.3"></svg:path>`,
})
export class GameIconsParaguayIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
