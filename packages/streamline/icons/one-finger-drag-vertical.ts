import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineOneFingerDragVerticalIcon],svg[streamline-one-finger-drag-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 13.5v-2.927A2.573 2.573 0 0 0 10.927 8H8.5V3.75c0-.69-.56-1.25-1.25-1.25v0C6.56 2.5 6 3.06 6 3.75V9l-.707.202a1.715 1.715 0 0 0-.944 2.62L5.5 13.5M.5 2L2 .5L3.5 2m-3 3.5L2 7l1.5-1.5M2 .5V7"></svg:path>`,
})
export class StreamlineOneFingerDragVerticalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
