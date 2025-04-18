import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSwipeUp08Icon],svg[hugeicons-swipe-up-08-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.504 1.999v5.993m0-5.993c-.7 0-2.006 1.992-2.497 2.497M19.504 2c.7 0 2.006 1.992 2.497 2.497M5.536 14.446v-4.47m0 0V4.454c0-.82.685-1.482 1.506-1.482c.822 0 1.47.662 1.47 1.482v4.001M5.535 9.976c-1.317 1.193-2.735 2.7-2.926 3.085c-.888 1.35-.795 2.004.195 3.657a41 41 0 0 0 2.037 3.036c.672.76.539.76 1.512 1.475c.87.602 2.674 1.022 6.902.602c3.445-.531 4.27-3.534 4.252-4.97v-3.544c.215-2.946-1.018-3.079-3.257-3.369M8.51 8.455v2.527m0-2.527c.56-.91 2.588-.542 2.983 1.176m.036 1.347V9.976q0-.118-.015-.236m-.02-.109l.02.11m-.02-.11q.005.053.02.11m-.02-.11c-.141-1.197 2.897-.905 3.02 1.2v1.145" color="currentColor"></svg:path>`,
})
export class HugeiconsSwipeUp08Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
