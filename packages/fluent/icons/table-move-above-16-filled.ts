import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableMoveAbove16FilledIcon],svg[fluent-table-move-above-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 2a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1zM11 6h2.5a.5.5 0 0 1 .5.5V10h-3zm-9 .5a.5.5 0 0 1 .5-.5H5v4H2zM6 10V7.415q.243.085.5.085a1.5 1.5 0 1 0 3 0q.257 0 .5-.085V10zm-1 1H2v.5A2.5 2.5 0 0 0 4.5 14H5zm5 3v-3H6v3zm1.5 0H11v-3h3v.5a2.5 2.5 0 0 1-2.5 2.5M9.854 6.354a.5.5 0 0 1-.708 0L8.5 5.707V7.5a.5.5 0 0 1-1 0V5.707l-.646.647a.5.5 0 1 1-.708-.708l1.5-1.5a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 0 1 0 .708"></svg:path>`,
})
export class FluentTableMoveAbove16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
