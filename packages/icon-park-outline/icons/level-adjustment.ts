import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineLevelAdjustmentIcon],svg[icon-park-outline-level-adjustment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="m11.114 18l3.763-14.044l27.046 7.247L40.102 18M7.898 30l-1.82 6.797l27.045 7.247L36.886 30"></svg:path><svg:path stroke-dasharray="2 6" d="M4 24h40"></svg:path></svg:g>`,
})
export class IconParkOutlineLevelAdjustmentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
