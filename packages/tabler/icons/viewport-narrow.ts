import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerViewportNarrowIcon],svg[tabler-viewport-narrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12h7L7 9m0 6l3-3m11 0h-7l3-3m0 6l-3-3M9 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1M9 18v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1"></svg:path>`,
})
export class TablerViewportNarrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
