import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerViewportShortIcon],svg[tabler-viewport-short-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v7l3-3M9 7l3 3m0 11v-7l3 3m-6 0l3-3m6-5h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1M6 9H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1"></svg:path>`,
})
export class TablerViewportShortIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
