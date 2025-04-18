import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerListLettersIcon],svg[tabler-list-letters-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 6h9m-9 6h9m-9 6h9M4 10V5.5a1.5 1.5 0 0 1 3 0V10M4 8h3M4 20h1.5a1.5 1.5 0 0 0 0-3H4h1.5a1.5 1.5 0 0 0 0-3H4z"></svg:path>`,
})
export class TablerListLettersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
