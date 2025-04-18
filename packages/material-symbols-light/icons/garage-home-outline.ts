import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightGarageHomeOutlineIcon],svg[material-symbols-light-garage-home-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20V9.5l7-5.288L19 9.5V20h-1V10l-6-4.538L6 10v10zm3.5-1.02h7v-3h-7zm0-4h7v-3h-7zm-1 5v-9h9v9z"></svg:path>`,
})
export class MaterialSymbolsLightGarageHomeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
