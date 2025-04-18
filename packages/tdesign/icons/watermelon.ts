import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignWatermelonIcon],svg[tdesign-watermelon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.995.59L1.59 16.996l.696.707c1.04 1.056 2.523 2.117 4.126 2.918C8.007 21.416 9.81 22 11.488 22C17.846 22 23 16.846 23 10.488c0-1.678-.584-3.481-1.38-5.075c-.8-1.603-1.862-3.085-2.918-4.126zm2.946 9.07q.059.428.059.828A9.51 9.51 0 0 1 11.488 20q-.4 0-.827-.06A11.516 11.516 0 0 0 20.94 9.66m-3.037-6.15c.463.788.745 1.765.906 2.707a13.6 13.6 0 0 1 .188 2.094v.133l.001.05v.021A9.51 9.51 0 0 1 9.489 18H9.43q-.033.002-.104.001c-.094 0-.236-.003-.417-.012a12 12 0 0 1-1.468-.173c-.89-.161-1.915-.455-2.867-.975zm-.902 4.488h-2.004v2.004h2.004zm-3 3h-2.004v2.004h2.004zm-3 3H8.998v2.004h2.004z"></svg:path>`,
})
export class TdesignWatermelonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
