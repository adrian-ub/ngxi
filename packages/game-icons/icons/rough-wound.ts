import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsRoughWoundIcon],svg[game-icons-rough-wound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M378.744 133.25c-238.248 24.048-68.733 98.574 81.488 161.753c-254.586-53.513-69.623 96.14 22.624 194.884c-97.054-61.694-215.83-120.378-320.06-142.827c234.825-17.035 26.77-138.346-134.27-172.088c185.74-1.445 164.326-12.097 8.96-152.757c131.684 75.394 215.833 97.65 341.26 111.038z"></svg:path>`,
})
export class GameIconsRoughWoundIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
