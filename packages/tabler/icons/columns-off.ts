import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerColumnsOffIcon],svg[tabler-columns-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h2m-2 4h5.5M4 14h5.5M4 18h5.5m5-12H20m-5.5 4H20m-2 4h2m-5.5 4H18M3 3l18 18"></svg:path>`,
})
export class TablerColumnsOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
