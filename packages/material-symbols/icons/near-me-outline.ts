import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNearMeOutlineIcon],svg[material-symbols-near-me-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.9 21l-2.85-7.05L3 11.1V9.7L21 3l-6.7 18zm.65-3.7L17.6 6.4L6.7 10.45l4.9 1.95zm-1.95-4.9"></svg:path>`,
})
export class MaterialSymbolsNearMeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
