import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNfcOffIcon],svg[material-symbols-nfc-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5.825L.675 3.5L2.1 2.075l19.8 19.8l-1.425 1.425l-2.3-2.3zM7 9.825V17h7.175l-2-2H9v-3.175zM15 9v3.15l-2-2V9zm6-4v13.15l-4-4V7h-4q-.65 0-1.15.35t-.725.925L5.85 3H19q.825 0 1.413.588T21 5"></svg:path>`,
})
export class MaterialSymbolsNfcOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
