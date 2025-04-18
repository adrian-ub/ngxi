import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNightShelterIcon],svg[material-symbols-night-shelter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 18h1v-1.5h8V18h1v-4q0-.825-.587-1.412T15 12h-3.5v3.5H8V11H7zm2.75-3q.525 0 .888-.363T11 13.75t-.363-.888t-.887-.362t-.888.363t-.362.887t.363.888t.887.362M4 21V9l8-6l8 6v12z"></svg:path>`,
})
export class MaterialSymbolsNightShelterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
