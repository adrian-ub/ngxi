import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowNext24RegularIcon],svg[fluent-arrow-next-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.25 3a.75.75 0 0 1 .743.648L19 3.75v16.5a.75.75 0 0 1-1.493.102l-.007-.102V3.75a.75.75 0 0 1 .75-.75m-13.03.22a.75.75 0 0 1 .976-.073l.084.073l8.25 8.25a.75.75 0 0 1 .073.976l-.073.084l-8.25 8.25a.75.75 0 0 1-1.133-.976l.073-.084L12.94 12L5.22 4.28a.75.75 0 0 1 0-1.06"></svg:path>`,
})
export class FluentArrowNext24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
