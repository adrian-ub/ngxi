import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTennis2LineDuotoneIcon],svg[solar-tennis-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.34 17c2.76 4.783 8.877 6.42 13.66 3.66a9.96 9.96 0 0 0 4.197-4.731a9.99 9.99 0 0 0-.537-8.93a9.99 9.99 0 0 0-7.464-4.928A9.96 9.96 0 0 0 7 3.339C2.217 6.101.578 12.217 3.34 17Z"></svg:path><svg:path stroke-dasharray="1.5 2" d="M13.196 2.071s-1.098 4.099 1.402 8.43s6.599 5.428 6.599 5.428M2.803 8.071s4.099 1.099 6.599 5.43s1.402 8.428 1.402 8.428" opacity=".5"></svg:path></svg:g>`,
})
export class SolarTennis2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
