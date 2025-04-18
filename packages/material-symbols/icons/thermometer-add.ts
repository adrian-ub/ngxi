import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsThermometerAddIcon],svg[material-symbols-thermometer-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 11V8h-3V6h3V3h2v3h3v2h-3v3zM8 21q-2.075 0-3.537-1.463T3 16q0-1.2.525-2.238T5 12V6q0-1.25.875-2.125T8 3t2.125.875T11 6v6q.95.725 1.475 1.763T13 16q0 2.075-1.463 3.538T8 21M7 10h2V6q0-.425-.288-.712T8 5t-.712.288T7 6z"></svg:path>`,
})
export class MaterialSymbolsThermometerAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
