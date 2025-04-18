import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChevronCircleDown32FilledIcon],svg[fluent-chevron-circle-down-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2c7.732 0 14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16S8.268 2 16 2m6.707 12.707a1 1 0 0 0-1.414-1.414L16 18.586l-5.293-5.293a1 1 0 0 0-1.414 1.414l5.878 5.879l.033.028q.04.035.08.073a1 1 0 0 0 .716.293c.26.003.484-.097.718-.293c.05-.041.06-.05.11-.1v-.002z"></svg:path>`,
})
export class FluentChevronCircleDown32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
