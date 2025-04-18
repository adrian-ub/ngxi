import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightChairSharpIcon],svg[material-symbols-light-chair-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.539 19.346v-1.5H2v-8h3v4.5h14v-4.5h3v8h-2.538v1.5H18.5v-1.5H5.539v1.5zm1.461-6v-4.5H4V5.231h16v3.615h-2v4.5z"></svg:path>`,
})
export class MaterialSymbolsLightChairSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
