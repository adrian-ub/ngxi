import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBadgeOffIcon],svg[tabler-badge-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7v10l5 3l5-3m0-4V4l-5 3l-2.496-1.497M3 3l18 18"></svg:path>`,
})
export class TablerBadgeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
