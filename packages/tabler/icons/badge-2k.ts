import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBadge2kIcon],svg[tabler-badge-2k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm11 2v6"></svg:path><svg:path d="m17 9l-2 3l2 3m-2-3h-1M7 9h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H8a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2"></svg:path></svg:g>`,
})
export class TablerBadge2kIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
