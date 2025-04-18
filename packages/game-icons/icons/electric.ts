import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsElectricIcon],svg[game-icons-electric-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M376 211H256V16L136 301h120v195z"></svg:path>`,
})
export class GameIconsElectricIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
