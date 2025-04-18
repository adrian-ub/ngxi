import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerViewportWideIcon],svg[tabler-viewport-wide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 12H3l3-3m0 6l-3-3m11 0h7l-3-3m0 6l3-3M3 6V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1M3 18v1a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1"></svg:path>`,
})
export class TablerViewportWideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
