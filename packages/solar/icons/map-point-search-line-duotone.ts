import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMapPointSearchLineDuotoneIcon],svg[solar-map-point-search-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4 10.143C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 0 1-2.926 0C6.553 19.812 4 14.606 4 10.144Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M14.125 12.118L15.5 13.5m-1.375-1.382a3 3 0 1 0-4.25-4.236a3 3 0 0 0 4.25 4.236Z"></svg:path></svg:g>`,
})
export class SolarMapPointSearchLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
