import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDocsAddOnIcon],svg[material-symbols-light-docs-add-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 20.475v-3h-3v-1h3v-3h1v3h3v1h-3v3zM4.5 17.5v-1h7.017q-.017.265-.004.505q.012.24.03.495zm0-4v-1h9.304q-.287.208-.538.458q-.25.25-.485.542zm0-4v-1h14v1zm0-4v-1h14v1z"></svg:path>`,
})
export class MaterialSymbolsLightDocsAddOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
