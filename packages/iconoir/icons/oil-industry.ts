import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirOilIndustryIcon],svg[iconoir-oil-industry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 10c0-1-1-2-3-2h-1a3 3 0 0 1-3-3V2"></svg:path><svg:path d="M9 10.8C9 9.033 6 6 6 6s-3 3.033-3 4.8S4.343 14 6 14s3-1.433 3-3.2Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 21h3v-9h-3v4.5m0 4.5v-4.5m0 4.5h-7.5v-4.5l4-2.5l3.5 2.5m3-6.5c0-6-4-6-4-6s4 .5 4-2"></svg:path></svg:g>`,
})
export class IconoirOilIndustryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
