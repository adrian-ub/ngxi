import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAddBusinessIcon],svg[material-symbols-light-add-business-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 22v-3h-3v-1h3v-3h1v3h3v1h-3v3zM3.23 19.5v-6H2v-1l1.154-5h13.692l1.154 5v1h-1.23v3.27h-1V13.5h-4.54v6zm1-1h6v-5h-6zm-1.076-13v-1h13.692v1z"></svg:path>`,
})
export class MaterialSymbolsLightAddBusinessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
