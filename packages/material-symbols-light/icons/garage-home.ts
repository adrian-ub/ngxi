import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightGarageHomeIcon],svg[material-symbols-light-garage-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20V9.5l7-5.288L19 9.5V20h-2.5v-9.02h-9V20zm3.5-1.02h7v-3h-7zm0-4h7v-3h-7z"></svg:path>`,
})
export class MaterialSymbolsLightGarageHomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
