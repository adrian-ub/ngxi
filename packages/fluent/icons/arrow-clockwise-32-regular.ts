import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowClockwise32RegularIcon],svg[fluent-arrow-clockwise-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 16C5 9.925 9.925 5 16 5c2.923 0 5.58 1.14 7.55 3H21a1 1 0 1 0 0 2h5a1 1 0 0 0 1-1V4a1 1 0 1 0-2 0v2.62A12.96 12.96 0 0 0 16 3C8.82 3 3 8.82 3 16s5.82 13 13 13s13-5.82 13-13q0-.546-.044-1.082a1 1 0 0 0-1.994.164Q27 15.537 27 16c0 6.075-4.925 11-11 11S5 22.075 5 16"></svg:path>`,
})
export class FluentArrowClockwise32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
