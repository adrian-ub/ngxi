import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciBarChartAltIcon],svg[ci-bar-chart-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 21H2V11a2 2 0 0 1 2-2h4V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3h4a2 2 0 0 1 2 2v12ZM16 9v10h4V9h-4Zm-6-5v15h4V4h-4Zm-6 7v8h4v-8H4Z"></svg:path>`,
})
export class CiBarChartAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
