import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsVerticalFlipIcon],svg[game-icons-vertical-flip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M233.373 387.02H165.49L256 477.53l90.51-90.51h-67.883V124.98h67.883L256 34.47l-90.51 90.51h67.883z"></svg:path>`,
})
export class GameIconsVerticalFlipIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
