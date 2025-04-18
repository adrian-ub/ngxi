import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiGestureSwipeHorizontalIcon],svg[mdi-gesture-swipe-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 1L3 4l3 3V5h3v2l3-3l-3-3v2H6zm5 7a1 1 0 0 0-1 1v10l-3.2-1.72h-.22c-.28 0-.55.11-.74.32l-.74.77l4.9 4.2c.26.28.62.43 1 .43h6.5a1.5 1.5 0 0 0 1.5-1.5v-4.36c0-.58-.32-1.11-.85-1.35l-4.94-2.19l-1.21-.13V9a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiGestureSwipeHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
