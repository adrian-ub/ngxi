import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandGoogleOneIcon],svg[tabler-brand-google-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11 5v13.982a2 2 0 0 0 4 0V5a2 2 0 1 0-4 0"></svg:path><svg:path d="M6.63 8.407a2.125 2.125 0 0 0-.074 2.944c.77.834 2.051.869 2.862.077l4.95-4.834c.812-.792.846-2.11.076-2.945a1.984 1.984 0 0 0-2.861-.077z"></svg:path></svg:g>`,
})
export class TablerBrandGoogleOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
