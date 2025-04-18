import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsJoinIcon],svg[game-icons-join-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 23v18h215v110h-37.6l6.5 13l40.1 80.1l46.6-93.1H265V41h215V23zm224 244.9L209.4 361H247v110H32v18h448v-18H265V361h37.6z"></svg:path>`,
})
export class GameIconsJoinIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
