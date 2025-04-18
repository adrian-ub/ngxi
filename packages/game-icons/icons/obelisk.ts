import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsObeliskIcon],svg[game-icons-obelisk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 22.127L238.562 57h34.875zM233 75v268h46V75zm-16 286v14h78v-14zm-17.193 32l-13.43 94h139.246l-13.428-94z"></svg:path>`,
})
export class GameIconsObeliskIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
