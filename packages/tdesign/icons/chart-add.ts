import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChartAddIcon],svg[tdesign-chart-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 0v3h3v2h-3v3h-2V5h-3V3h3V0zM2 2h11v2H4v16h16V10h2v12H2zm11 6v10h-2V8zm-5 3v7H6v-7zm10 2v5h-2v-5z"></svg:path>`,
})
export class TdesignChartAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
