import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirSwipeTwoFingersRightGestureIcon],svg[iconoir-swipe-two-fingers-right-gesture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 17.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m0 0h7m0 0L16.6 15m2.4 2.5L16.6 20M12 6.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m0 0h7m0 0L16.6 4M19 6.5L16.6 9"></svg:path>`,
})
export class IconoirSwipeTwoFingersRightGestureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
