import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsPauseButtonIcon],svg[game-icons-pause-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120.16 45A20.16 20.16 0 0 0 100 65.16v381.68A20.16 20.16 0 0 0 120.16 467h65.68A20.16 20.16 0 0 0 206 446.84V65.16A20.16 20.16 0 0 0 185.84 45zm206 0A20.16 20.16 0 0 0 306 65.16v381.68A20.16 20.16 0 0 0 326.16 467h65.68A20.16 20.16 0 0 0 412 446.84V65.16A20.16 20.16 0 0 0 391.84 45z"></svg:path>`,
})
export class GameIconsPauseButtonIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
