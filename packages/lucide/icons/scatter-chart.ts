import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideScatterChartIcon],svg[lucide-scatter-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="18.5" cy="5.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="11.5" cy="11.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="7.5" cy="16.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="17.5" cy="14.5" r=".5" fill="currentColor"></svg:circle><svg:path d="M3 3v18h18"></svg:path></svg:g>`,
})
export class LucideScatterChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
