import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirSwipeTwoFingersUpGestureIcon],svg[iconoir-swipe-two-fingers-up-gesture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.5 12a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7m0 0V5m0 0L9 7.4M6.5 5L4 7.4M17.5 12a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7m0 0V5m0 0L20 7.4M17.5 5L15 7.4"></svg:path>`,
})
export class IconoirSwipeTwoFingersUpGestureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
