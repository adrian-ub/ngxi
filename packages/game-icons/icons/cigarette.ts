import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsCigaretteIcon],svg[game-icons-cigarette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 32c9.036 24.71 106.984 58.72 156.096 64c-37.096 7.89-53.042 10.52-57.545 32c-13.076 62.384 191.477 60.478 115.73 152.223c69.11-15.788 57.922-116.197 15.887-129.84c-27.237-8.84-63.75-11.67-47.75-38.383C425.962 88.104 503.57 59.74 448 32zM28.096 292v64h87v-64zm105 0v64h274v-64zm292 0v64h16v-64zm34 0v64h17v-64z"></svg:path>`,
})
export class GameIconsCigaretteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
