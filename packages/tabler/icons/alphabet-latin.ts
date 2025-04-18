import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAlphabetLatinIcon],svg[tabler-alphabet-latin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 10h2a2 2 0 0 1 2 2v5H7a2 2 0 1 1 0-4h3m4-6v10m0-5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2z"></svg:path>`,
})
export class TablerAlphabetLatinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
