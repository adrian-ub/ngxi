import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsChartRelationshipIcon],svg[hugeicons-chart-relationship-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11 5h7m-8 5l4.5 4.5M5 11v7"></svg:path><svg:circle cx="6.444" cy="6.444" r="4.444"></svg:circle><svg:circle cx="5" cy="20" r="2"></svg:circle><svg:circle cx="16" cy="16" r="2"></svg:circle><svg:circle cx="20" cy="5" r="2"></svg:circle></svg:g>`,
})
export class HugeiconsChartRelationshipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
