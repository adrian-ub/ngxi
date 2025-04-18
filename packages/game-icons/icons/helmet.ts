import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsHelmetIcon],svg[game-icons-helmet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 76C123.45 76 16 183.452 16 316c0 43.716 11.453 84.698 31.875 120H196l31.875-64.688C191.868 359.546 166 325.938 166 286c0-49.706 40.294-90 90-90s90 40.294 90 90v30h150c0-132.548-107.45-240-240-240m-4.218 150A60 60 0 0 0 196 286a60 60 0 0 0 120 0a60 60 0 0 0-64.218-60"></svg:path>`,
})
export class GameIconsHelmetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
