import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChartAddFilledIcon],svg[tdesign-chart-add-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3V0h-2v3h-3v2h3v3h2V5h3V3z"></svg:path><svg:path fill="currentColor" d="M13.5 4c0-.706.132-1.38.374-2H2v20h20V8.61A5.5 5.5 0 0 1 13.5 4M13 18h-2V8h2zm-5 0H6v-7h2zm8 0v-5h2v5z"></svg:path>`,
})
export class TdesignChartAddFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
