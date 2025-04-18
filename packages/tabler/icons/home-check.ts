import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHomeCheckIcon],svg[tabler-home-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2"></svg:path><svg:path d="M19 13.488V12h2l-9-9l-9 9h2v7a2 2 0 0 0 2 2h4.525M15 19l2 2l4-4"></svg:path></svg:g>`,
})
export class TablerHomeCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
