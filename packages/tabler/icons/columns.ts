import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerColumnsIcon],svg[tabler-columns-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h5.5M4 10h5.5M4 14h5.5M4 18h5.5m5-12H20m-5.5 4H20m-5.5 4H20m-5.5 4H20"></svg:path>`,
})
export class TablerColumnsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
