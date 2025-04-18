import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDomainAddIcon],svg[material-symbols-light-domain-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.73 20.154v-17h9v4h9.54v8.308h-1V8.154h-8.54v3h2.386v1H11.73v3h2.385v1H11.73v3h4.77v1zm1-1h3v-3h-3zm0-4h3v-3h-3zm0-4h3v-3h-3zm0-4h3v-3h-3zm4 12h3v-3h-3zm0-4h3v-3h-3zm0-4h3v-3h-3zm0-4h3v-3h-3zm12.54 15v-2h-2v-1h2v-2h1v2h2v1h-2v2zm-3.77-10v-1h1v1zm0 4v-1h1v1z"></svg:path>`,
})
export class MaterialSymbolsLightDomainAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
