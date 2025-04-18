import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsArrowCursorIcon],svg[game-icons-arrow-cursor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M123.193 29.635L121 406.18l84.31-82.836l65.87 159.02l67.5-27.96l-65.87-159.02L391 294.342z"></svg:path>`,
})
export class GameIconsArrowCursorIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
