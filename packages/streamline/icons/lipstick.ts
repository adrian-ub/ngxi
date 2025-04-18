import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineLipstickIcon],svg[streamline-lipstick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.29 9.71a1 1 0 0 0 0 1.41l2.09 2.09a1 1 0 0 0 1.41 0L8.5 9.5L5 6z"></svg:path><svg:path d="M5.54 6.54L11.29.79a1 1 0 0 1 1.09-.21a1 1 0 0 1 .62.92v2.17a1 1 0 0 1-.29.71L8 9m.04-4.96l2.5 2.5"></svg:path></svg:g>`,
})
export class StreamlineLipstickIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
