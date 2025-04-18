import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandDisneyIcon],svg[tabler-brand-disney-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3.22 5.838C1.913 5.688 2 5.26 2 5.044S2.424 4 6.34 4C11.034 4 21 7.645 21 14.042s-8.71 4.931-10.435 4.52S5 16.306 5 14.388C5 12.993 8.08 12 11.715 12S17 13.041 17 14c0 .5-.074 1.229-1 1.5"></svg:path><svg:path d="M10.02 8a505 505 0 0 0 0 13"></svg:path></svg:g>`,
})
export class TablerBrandDisneyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
