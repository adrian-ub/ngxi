import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBugReportIcon],svg[tdesign-bug-report-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.128 1.592L9.493 4.43A7.5 7.5 0 0 1 12 4c.878 0 1.722.151 2.507.43l2.365-2.838l1.536 1.28l-2.083 2.5A7.5 7.5 0 0 1 19.073 9H22v2h-2.516q.015.248.016.5v5q0 .252-.016.5H22v2h-2.927a7.503 7.503 0 0 1-14.146 0H2v-2h2.516a8 8 0 0 1-.016-.5v-5q0-.252.016-.5H2V9h2.927a7.5 7.5 0 0 1 2.748-3.628l-2.083-2.5zM12 6a5.5 5.5 0 0 0-5.5 5.5v5a5.5 5.5 0 0 0 11 0v-5A5.5 5.5 0 0 0 12 6m-3 4h6v2H9zm0 6h6v2H9z"></svg:path>`,
})
export class TdesignBugReportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
