import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirSwipeUpGestureIcon],svg[iconoir-swipe-up-gesture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 10a6 6 0 1 0 0 12a6 6 0 0 0 0-12m0 0V2m0 0l3 3m-3-3L9 5"></svg:path>`,
})
export class IconoirSwipeUpGestureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
