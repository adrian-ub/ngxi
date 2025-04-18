import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPanoramaHorizontalIcon],svg[tabler-panorama-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.338 5.53q7.658 2.898 15.317 0A1 1 0 0 1 21 6.464v11c0 .692-.692 1.2-1.34.962q-7.66-2.898-15.321 0A.993.993 0 0 1 3 17.491V6.464a1 1 0 0 1 1.338-.935z"></svg:path>`,
})
export class TablerPanoramaHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
