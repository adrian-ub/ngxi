import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsOverkillIcon],svg[game-icons-overkill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 16C123.45 16 16 123.45 16 256s107.45 240 240 240s240-107.45 240-240S388.55 16 256 16m0 60c99.41 0 180 80.59 180 180s-80.59 180-180 180S76 355.41 76 256S156.59 76 256 76M121.937 182.375A67.5 62.31 0 0 0 106 222.688a67.5 62.309 0 0 0 131.72 20.156a135 69.23 0 0 1-115.782-60.47zm268.125 0a135 69.23 0 0 1-115.78 60.47A67.5 62.31 0 0 0 406 222.687a67.5 62.309 0 0 0-15.938-40.313z"></svg:path>`,
})
export class GameIconsOverkillIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
