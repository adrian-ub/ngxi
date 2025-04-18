import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsConvergenceTargetIcon],svg[game-icons-convergence-target-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m172.7 19.27l-25.4 25.46L256 153.5L364.7 44.73l-25.4-25.46L256 102.5zM44.73 147.3l-25.46 25.4L102.5 256l-83.23 83.3l25.46 25.4L153.5 256zm422.47 0L358.6 256l108.6 108.7l25.4-25.4l-83.2-83.3l83.2-83.3zM256 358.5L147.3 467.3l25.4 25.4l83.3-83.2l83.3 83.2l25.4-25.4z"></svg:path>`,
})
export class GameIconsConvergenceTargetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
