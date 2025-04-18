import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBadgeAdOffIcon],svg[tabler-badge-ad-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 5h10a2 2 0 0 1 2 2v10m-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2"></svg:path><svg:path d="M14 14v1h1m2-2v-2a2 2 0 0 0-2-2h-1v1m-7 5v-4.5a1.5 1.5 0 0 1 2.077-1.385m.788.762c.087.19.135.4.135.623V15m-3-2h3M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerBadgeAdOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
