import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrailleIcon],svg[tabler-braille-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5a1 1 0 1 0 2 0a1 1 0 0 0-2 0M7 5a1 1 0 1 0 2 0a1 1 0 0 0-2 0m0 14a1 1 0 1 0 2 0a1 1 0 0 0-2 0m9-7h.01M8 12h.01M16 19h.01"></svg:path>`,
})
export class TablerBrailleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
