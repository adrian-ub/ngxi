import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsWeightCrushIcon],svg[game-icons-weight-crush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 16c-41.42 0-75 33.58-75 75c0 17.06 5.874 32.398 15.468 45H136L46 346h420l-90-210h-60.468C325.127 123.398 331 108.06 331 91c0-41.42-33.58-75-75-75m0 30c24.854 0 45 20.146 45 45s-20.146 45-45 45s-45-20.147-45-45s20.146-45 45-45m-4.218 330A60 60 0 0 0 196 436a60 60 0 0 0 120 0a60 60 0 0 0-64.218-60"></svg:path>`,
})
export class GameIconsWeightCrushIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
