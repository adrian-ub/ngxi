import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightInboxOutlineSharpIcon],svg[material-symbols-light-inbox-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V4h16v16zm1-1h14v-3.384h-3.577q-.557.95-1.46 1.475T12 17.616t-1.963-.525t-1.46-1.475H5zm7-2.384q.95 0 1.725-.55t1.075-1.45H19V5H5v9.616h4.2q.3.9 1.075 1.45t1.725.55M5 19h14z"></svg:path>`,
})
export class MaterialSymbolsLightInboxOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
