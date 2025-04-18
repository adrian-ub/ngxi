import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsChemistryLightIcon],svg[lets-icons-chemistry-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10.5 7.5l2 3l-2 3h-3l-2-3l2-3z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m15.5 4.5l2 3l-2 3h-3l-2-3l2-3zm0 12l2 3m-12-15l2 3m5 9l-1 1.5m-4-4.5l-1 1.5m-1-4.5h-1m13 3h3m-5-3l2 3l-2 3h-3l-2-3l2-3z"></svg:path><svg:circle cx="10.5" cy="19.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="5.5" cy="16.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="2.5" cy="10.5" r=".5" fill="currentColor"></svg:circle></svg:g>`,
})
export class LetsIconsChemistryLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
