import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentProhibited32RegularIcon],svg[fluent-prohibited-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.837 23.749A11.95 11.95 0 0 1 4 16C4 9.373 9.373 4 16 4c2.954 0 5.658 1.067 7.749 2.837zm1.414 1.414L25.163 8.251A11.95 11.95 0 0 1 28 16c0 6.627-5.373 12-12 12a11.95 11.95 0 0 1-7.749-2.837M2 16c0 7.732 6.268 14 14 14s14-6.268 14-14S23.732 2 16 2S2 8.268 2 16"></svg:path>`,
})
export class FluentProhibited32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
