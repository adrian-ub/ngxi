import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsSmashArrowsIcon],svg[game-icons-smash-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M121.068 15.52v339.31H20.54l100.53 142.516h77.385l-47.49-149.364h50.225V15.52h-80.12zm98.81 0v351.15h-43.362l41.547 130.676h80.36l41.548-130.676h-43.36V15.52zm95.42 0v332.462h50.223l-47.487 149.364H391.3L491.823 354.83H391.3V15.52h-76z"></svg:path>`,
})
export class GameIconsSmashArrowsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
