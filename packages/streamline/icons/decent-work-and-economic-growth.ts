import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDecentWorkAndEconomicGrowthIcon],svg[streamline-decent-work-and-economic-growth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m9.008 6.709l3.43-1.516v7.672h-3.43zM4.72 4.814l2.144 3.032l2.144-1.137v6.154H4.72z"></svg:path><svg:path d="m1.29 6.33l3.43-1.516v8.05H1.29zm12-5.193L7.851 4.613l-2.5-2.923L.878 3.988"></svg:path><svg:path d="m10.586.678l2.703.45l-.45 2.704"></svg:path></svg:g>`,
})
export class StreamlineDecentWorkAndEconomicGrowthIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
