import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirSwipeTwoFingersDownGestureIcon],svg[iconoir-swipe-two-fingers-down-gesture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.5 12a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7m0 0v7m0 0L9 16.6M6.5 19L4 16.6M17.5 12a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7m0 0v7m0 0l2.5-2.4M17.5 19L15 16.6"></svg:path>`,
})
export class IconoirSwipeTwoFingersDownGestureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
