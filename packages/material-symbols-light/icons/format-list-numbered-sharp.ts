import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFormatListNumberedSharpIcon],svg[material-symbols-light-format-list-numbered-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21v-.885h2.5V18.75H5v-.885h1.5V16.5H4v-.885h3.385v2.25l-.693.52l.692.365V21zm0-6.308v-3.134h2.5v-1.366H4v-.884h3.385v3.134h-2.5v1.366h2.5v.884zm1.5-6.308v-4.5H4V3h2.385v5.385zM9.616 18.5v-1H20v1zm0-6v-1H20v1zm0-6v-1H20v1z"></svg:path>`,
})
export class MaterialSymbolsLightFormatListNumberedSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
