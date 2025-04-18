import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsOverheadIcon],svg[game-icons-overhead-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M37.368 144.56c97.187 0 101.127 1.314 101.127 1.314C263.844-57.842 363.082 219.342 375.947 319.62l-36.72.16l71.834 125.393l68.982-125.01l-35.724-1.472c-82.41-287.54-303.28-300.208-406.95-174.13z"></svg:path>`,
})
export class GameIconsOverheadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
