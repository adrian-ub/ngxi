import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAntennaOffIcon],svg[tabler-antenna-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 4v8m-4-7.5v7M12 5v3m0 4v9M8 8v2.5M4 6v4m16-2h-8M8 8H4M3 3l18 18"></svg:path>`,
})
export class TablerAntennaOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
