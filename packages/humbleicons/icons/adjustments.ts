import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsAdjustmentsIcon],svg[humbleicons-adjustments-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v10m0 6v-.5M17.5 4v5m0 11v-5.56M6.5 4v2m0 14v-8.44M6.5 6a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m5.5 8a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m5.5-5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path>`,
})
export class HumbleiconsAdjustmentsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
