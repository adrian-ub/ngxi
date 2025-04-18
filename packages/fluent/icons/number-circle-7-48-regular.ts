import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNumberCircle748RegularIcon],svg[fluent-number-circle-7-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 24c0-9.665 7.835-17.5 17.5-17.5S41.5 14.335 41.5 24S33.665 41.5 24 41.5S6.5 33.665 6.5 24M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20s20-8.954 20-20S35.046 4 24 4m-6.75 10a1.25 1.25 0 1 0 0 2.5h10.985a44 44 0 0 0-2.038 3.214c-1.915 3.322-4.103 8.08-5.176 13.806a1.25 1.25 0 1 0 2.458.46c1.006-5.375 3.068-9.866 4.884-13.018a40 40 0 0 1 2.36-3.644a27 27 0 0 1 .914-1.18q.031-.04.046-.056l.011-.013A1.25 1.25 0 0 0 30.75 14z"></svg:path>`,
})
export class FluentNumberCircle748RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
