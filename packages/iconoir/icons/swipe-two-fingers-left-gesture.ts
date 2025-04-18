import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirSwipeTwoFingersLeftGestureIcon],svg[iconoir-swipe-two-fingers-left-gesture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 17.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 0 0-7 0m0 0H5m0 0L7.4 15M5 17.5L7.4 20M12 6.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 0 0-7 0m0 0H5m0 0L7.4 4M5 6.5L7.4 9"></svg:path>`,
})
export class IconoirSwipeTwoFingersLeftGestureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
