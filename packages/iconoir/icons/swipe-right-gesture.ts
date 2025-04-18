import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirSwipeRightGestureIcon],svg[iconoir-swipe-right-gesture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 12a6 6 0 1 1-12 0a6 6 0 0 1 12 0m0 0h8m0 0l-3-3m3 3l-3 3"></svg:path>`,
})
export class IconoirSwipeRightGestureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
