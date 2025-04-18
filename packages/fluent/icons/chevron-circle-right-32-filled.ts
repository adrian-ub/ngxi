import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChevronCircleRight32FilledIcon],svg[fluent-chevron-circle-right-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 16C2 8.268 8.268 2 16 2s14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16m12.707-6.707a1 1 0 1 0-1.414 1.414L18.586 16l-5.293 5.293a1 1 0 0 0 1.414 1.414l5.879-5.878l.028-.033q.035-.04.073-.08A1 1 0 0 0 20.98 16c.003-.26-.097-.484-.293-.718a1 1 0 0 0-.1-.11h-.002z"></svg:path>`,
})
export class FluentChevronCircleRight32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
