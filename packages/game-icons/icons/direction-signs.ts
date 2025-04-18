import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsDirectionSignsIcon],svg[game-icons-direction-signs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m277.3 35.11l-32.1 2.12l-1 32.93l33.6.05zM151.7 88.04L67.96 118.9L152 169.2l188-6.2l2.4-74.72zM279.2 183l-38.3 1.3l-.8 27.8l39.5 1.2zm-93.1 45.6l.8 64.2l200.4.9l51.7-29.2l-55.8-30.2zm51.1 82.5l-5 175.3l50.9.6l-2.3-175.7z"></svg:path>`,
})
export class GameIconsDirectionSignsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
