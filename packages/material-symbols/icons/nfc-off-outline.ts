import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNfcOffOutlineIcon],svg[material-symbols-nfc-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5.825L.675 3.5L2.1 2.075l19.8 19.8l-1.425 1.425l-2.3-2.3zm2-4V9.825l-2-2V19h11.175l-2-2zm14 1.15l-2-2V5H7.85l-2-2H19q.825 0 1.413.588T21 5zM9 15h3.175L9 11.825zm8-.85l-2-2V9h-2v1.15l-1.875-1.875q.225-.575.725-.925T13 7h4zm-3.575-3.575"></svg:path>`,
})
export class MaterialSymbolsNfcOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
