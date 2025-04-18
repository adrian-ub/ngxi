import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFileChartOutlineIcon],svg[mdi-file-chart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5zm-9-7v6H7v-6zm6 2v4h2v-4zm-4-4v8h2v-8z"></svg:path>`,
})
export class MdiFileChartOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
