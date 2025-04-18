import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsCircleIcon],svg[game-icons-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 23.05C127.5 23.05 23.05 127.5 23.05 256S127.5 488.9 256 488.9S488.9 384.5 488.9 256S384.5 23.05 256 23.05m0 17.9c118.9 0 215.1 96.15 215.1 215.05S374.9 471.1 256 471.1S40.95 374.9 40.95 256S137.1 40.95 256 40.95"></svg:path>`,
})
export class GameIconsCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
