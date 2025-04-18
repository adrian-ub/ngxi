import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightServiceToolboxOutlineSharpIcon],svg[material-symbols-light-service-toolbox-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.192 7V4.846h7.616V7h2.513L21 13.066V19H3v-5.934L5.679 7zm1 0h5.616V5.846H9.192zM7.5 12.692v-1h1v1h7v-1h1v1h3.246L17.7 8H6.3l-2.046 4.692zm0 1H4V18h16v-4.308h-3.5v1h-1v-1h-7v1h-1zm4.5 0"></svg:path>`,
})
export class MaterialSymbolsLightServiceToolboxOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
