import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowCounterclockwise32RegularIcon],svg[fluent-arrow-counterclockwise-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 16c0-6.075-4.925-11-11-11a10.96 10.96 0 0 0-7.55 3H11a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v2.62A12.96 12.96 0 0 1 16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13S3 23.18 3 16q0-.546.044-1.082a1 1 0 0 1 1.994.164A11 11 0 0 0 5 16c0 6.075 4.925 11 11 11s11-4.925 11-11"></svg:path>`,
})
export class FluentArrowCounterclockwise32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
