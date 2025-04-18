import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAlphabetCyrillicIcon],svg[tabler-alphabet-cyrillic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 10h2a2 2 0 0 1 2 2v5H7a2 2 0 1 1 0-4h3m9-6h-3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2h-3"></svg:path>`,
})
export class TablerAlphabetCyrillicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
