import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiChartBoxMultipleIcon],svg[mdi-chart-box-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20h12v2H4c-1.1 0-2-.9-2-2V7h2m18-3v12c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2M12 8h-2v6h2m3-8h-2v8h2m3-3h-2v3h2Z"></svg:path>`,
})
export class MdiChartBoxMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
