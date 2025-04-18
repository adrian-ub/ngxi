import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitChartGrowthIcon],svg[uit-chart-growth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.5 21H20V4.5a.5.5 0 0 0-1 0V21h-3V8.5a.5.5 0 0 0-1 0V21h-3v-8.5a.5.5 0 0 0-1 0V21H8v-4.5a.5.5 0 0 0-1 0V21H3V2.5a.5.5 0 0 0-1 0v19a.5.5 0 0 0 .5.5h19a.5.5 0 0 0 0-1"></svg:path>`,
})
export class UitChartGrowthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
