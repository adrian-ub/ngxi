import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBuildingAirportIcon],svg[tabler-building-airport-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3.59 7h8.82a1 1 0 0 1 .902 1.433l-1.44 3a1 1 0 0 1-.901.567H5.029a1 1 0 0 1-.901-.567l-1.44-3A1 1 0 0 1 3.589 7"></svg:path><svg:path d="m6 7l-.78-2.342A.5.5 0 0 1 5.693 4h4.612a.5.5 0 0 1 .475.658L10 7M8 2v2m-2 8v9h4v-9m-7 9h18m1-16h-6l-1-1"></svg:path><svg:path d="m18 3l2 2l-2 2m-8 10h7a2 2 0 0 1 2 2v2"></svg:path></svg:g>`,
})
export class TablerBuildingAirportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
