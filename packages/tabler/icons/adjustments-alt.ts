import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAdjustmentsAltIcon],svg[tabler-adjustments-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h4v4H4zm2-4v4m0 4v8m4-6h4v4h-4zm2-10v10m0 4v2m4-15h4v4h-4zm2-1v1m0 4v11"></svg:path>`,
})
export class TablerAdjustmentsAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
