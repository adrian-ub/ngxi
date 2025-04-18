import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAddTriangleOutlineIcon],svg[material-symbols-light-add-triangle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.02 20L12 3l10 17zm1.724-1h16.531L12 5zm7.756-1.904h1v-1.942h1.98v-1H12.5V12.23h-1v1.923H9.539v1H11.5zm.52-2.442"></svg:path>`,
})
export class MaterialSymbolsLightAddTriangleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
