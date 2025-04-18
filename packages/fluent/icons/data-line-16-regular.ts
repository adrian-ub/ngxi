import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDataLine16RegularIcon],svg[fluent-data-line-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 6a2 2 0 1 0-1.497-.674L9.965 7.248A2 2 0 0 0 7.171 9.81l-2.51 1.076a2 2 0 1 0 .331.946l2.833-1.214a2 2 0 0 0 2.87-2.682l1.64-2.05q.314.111.665.113m0-1a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-9 7a1 1 0 1 1-2 0a1 1 0 0 1 2 0m6-3a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class FluentDataLine16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
