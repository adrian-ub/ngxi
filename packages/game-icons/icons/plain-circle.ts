import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsPlainCircleIcon],svg[game-icons-plain-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 23.05C127.5 23.05 23.05 127.5 23.05 256S127.5 488.9 256 488.9S488.9 384.5 488.9 256S384.5 23.05 256 23.05"></svg:path>`,
})
export class GameIconsPlainCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
