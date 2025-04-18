import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFormatListNumberedRtlSharpIcon],svg[material-symbols-light-format-list-numbered-rtl-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.616 21v-.885h2.5V18.75h-1.5v-.885h1.5V16.5h-2.5v-.885H20v2.25l-.692.52l.692.365V21zm0-6.308v-3.134h2.5v-1.366h-2.5v-.884H20v3.134h-2.5v1.366H20v.884zm1.5-6.308v-4.5h-1.5V3H19v5.385zM4 18.5v-1h10.385v1zm0-6v-1h10.385v1zm0-6v-1h10.385v1z"></svg:path>`,
})
export class MaterialSymbolsLightFormatListNumberedRtlSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
