import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowReset48RegularIcon],svg[fluent-arrow-reset-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.634 6.634a1.25 1.25 0 0 0-1.768-1.768l-7.5 7.5a1.25 1.25 0 0 0 0 1.768l7.5 7.5a1.25 1.25 0 0 0 1.768-1.768L8.268 14.5H26.5c7.18 0 13 5.82 13 13s-5.82 13-13 13s-13-5.82-13-13a1.25 1.25 0 1 0-2.5 0C11 36.06 17.94 43 26.5 43S42 36.06 42 27.5S35.06 12 26.5 12H8.268z"></svg:path>`,
})
export class FluentArrowReset48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
