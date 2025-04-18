import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsTriangleTargetIcon],svg[game-icons-triangle-target-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M247 65.16L32.34 440.8l61.79-35.7L247 137.6zm18 .38V137l158.3 271.3l62.7 36.1C412.2 318.2 338.6 191.8 265 65.54M415.4 424.5l-321.3 1.4l-62.72 36.2l445.82-1.9z"></svg:path>`,
})
export class GameIconsTriangleTargetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
