import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerGlassChampagneIcon],svg[tabler-glass-champagne-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 21h6m-3-5v5M8 5a4 2 0 1 0 8 0a4 2 0 1 0-8 0"></svg:path><svg:path d="M8 5c0 6.075 1.79 11 4 11s4-4.925 4-11"></svg:path></svg:g>`,
})
export class TablerGlassChampagneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
