import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightUppercaseIcon],svg[material-symbols-light-uppercase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.75 17.577v-7.046l-2.1 2.1l-.708-.708l3.308-3.307l3.308 3.307l-.708.708l-2.1-2.1v7.046zm-12.75 0l3.76-10.23h1.09l3.817 10.23h-1.105l-1.039-2.96h-4.43l-1.02 2.96zm2.437-3.867h3.755L8.337 8.487h-.062z"></svg:path>`,
})
export class MaterialSymbolsLightUppercaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
