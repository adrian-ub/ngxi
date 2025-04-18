import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChevronCircleDown32RegularIcon],svg[fluent-chevron-circle-down-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.707 14.707a1 1 0 0 0-1.414-1.414L16 18.586l-5.293-5.293a1 1 0 0 0-1.414 1.414l5.878 5.879l.033.028q.04.035.08.073a1 1 0 0 0 .716.293c.26.003.484-.097.718-.293c.05-.041.06-.05.11-.1v-.002zM30 16c0-7.732-6.268-14-14-14S2 8.268 2 16s6.268 14 14 14s14-6.268 14-14M16 4c6.627 0 12 5.373 12 12s-5.373 12-12 12S4 22.627 4 16S9.373 4 16 4"></svg:path>`,
})
export class FluentChevronCircleDown32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
