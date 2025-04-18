import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsCrossroadIcon],svg[game-icons-crossroad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m164 16l-32 16l32 32l64 16V32zm184 0l-64 16v48l64-16l32-32zM247 32v112h18V32zM16 64l182.7 182.7L96 496h320L313.3 246.7L496 64h-64L256 192L80 64z"></svg:path>`,
})
export class GameIconsCrossroadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
