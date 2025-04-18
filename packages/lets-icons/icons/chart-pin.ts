import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsChartPinIcon],svg[lets-icons-chart-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15.5 10.5l-3 3l-2-2l-3 3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14 5H7.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C4 6.52 4 7.08 4 8.2v8.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C5.52 20 6.08 20 7.2 20h8.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C19 18.48 19 17.92 19 16.8V10"></svg:path><svg:circle cx="19" cy="5" r="2" fill="currentColor"></svg:circle></svg:g>`,
})
export class LetsIconsChartPinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
