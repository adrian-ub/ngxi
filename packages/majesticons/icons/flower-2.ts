import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsFlower2Icon],svg[majesticons-flower-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M4 14c0 2.333 1.4 7 7 7c0-2.333-1.4-7-7-7m3-6V4l2.5 2L12 3l2.5 3L17 4v4c0 1.667-1 5-5 5S7 9.667 7 8m13 6c0 2.333-1.4 7-7 7c0-2.333 1.4-7 7-7"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 21c-5.6 0-7-4.667-7-7c5.6 0 7 4.667 7 7m0 0h1m0 0v-8m0 8h1m-1-8c-4 0-5-3.333-5-5V4l2.5 2L12 3l2.5 3L17 4v4c0 1.667-1 5-5 5m1 8c5.6 0 7-4.667 7-7c-5.6 0-7 4.667-7 7"></svg:path></svg:g>`,
})
export class MajesticonsFlower2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
