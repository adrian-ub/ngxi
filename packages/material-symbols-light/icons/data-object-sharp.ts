import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDataObjectSharpIcon],svg[material-symbols-light-data-object-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.52 19v-1H18v-5.771h1.827v-.458H18V5.995h-3.48V5H19v5.927h2v2.146h-2V19zM5 19v-5.927H3v-2.146h2V5h4.48v1H6v5.771H4.173v.458H6v5.776h3.48V19z"></svg:path>`,
})
export class MaterialSymbolsLightDataObjectSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
