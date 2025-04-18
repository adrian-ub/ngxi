import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDangerousIcon],svg[material-symbols-light-dangerous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.673 20L4 15.327V8.673L8.673 4h6.654L20 8.673v6.654L15.327 20zm.477-4.442l2.85-2.85l2.85 2.85l.708-.708l-2.85-2.85l2.85-2.85l-.708-.708l-2.85 2.85l-2.85-2.85l-.708.708l2.85 2.85l-2.85 2.85z"></svg:path>`,
})
export class MaterialSymbolsLightDangerousIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
