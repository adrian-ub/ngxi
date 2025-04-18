import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsFlower2LineIcon],svg[majesticons-flower-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13c-4 0-5-3.333-5-5V4l2.5 2L12 3l2.5 3L17 4v4c0 1.667-1 5-5 5m0 0v8m1 0c5.6 0 7-4.667 7-7c-5.6 0-7 4.667-7 7m0 0h-1m-1 0c-5.6 0-7-4.667-7-7c5.6 0 7 4.667 7 7m0 0h1"></svg:path>`,
})
export class MajesticonsFlower2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
