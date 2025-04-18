import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLuggageIcon],svg[tabler-luggage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm3-2V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1m-9 4h12M6 16h12m-9 4v1m6-1v1"></svg:path>`,
})
export class TablerLuggageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
