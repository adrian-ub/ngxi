import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerArrowWaveRightDownIcon],svg[tabler-arrow-wave-right-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M17 14h4v-4"></svg:path><svg:path d="M3 12c.887 1.284 2.48 2.033 4 2c1.52.033 3.113-.716 4-2s2.48-2.033 4-2c1.52-.033 3 1 4 2l2 2"></svg:path></svg:g>`,
})
export class TablerArrowWaveRightDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
