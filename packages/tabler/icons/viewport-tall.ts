import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerViewportTallIcon],svg[tabler-viewport-tall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10V3l3 3M9 6l3-3m0 11v7l3-3m-6 0l3 3m6-18h1a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-1M6 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h1"></svg:path>`,
})
export class TablerViewportTallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
