import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBadge3kIcon],svg[tabler-badge-3k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm11 2v6"></svg:path><svg:path d="m17 9l-2 3l2 3m-2-3h-1M7 9.5a.5.5 0 0 1 .5-.5h1a1.5 1.5 0 0 1 0 3H8h.5a1.5 1.5 0 0 1 0 3h-1a.5.5 0 0 1-.5-.5"></svg:path></svg:g>`,
})
export class TablerBadge3kIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
