import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSprayIcon],svg[tabler-spray-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-2V6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4m5-3h.01M18 9h.01M18 5h.01M21 3h.01M21 7h.01M21 11h.01M10 7h1"></svg:path>`,
})
export class TablerSprayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
