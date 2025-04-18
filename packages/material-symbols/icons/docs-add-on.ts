import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDocsAddOnIcon],svg[material-symbols-docs-add-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 20.975v-3h-3v-2h3v-3h2v3h3v2h-3v3zM4 18v-2h7.075q-.075.525-.062 1t.087 1zm0-4v-2h9.65q-.575.4-1.037.9T11.8 14zm0-4V8h15v2zm0-4V4h15v2z"></svg:path>`,
})
export class MaterialSymbolsDocsAddOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
