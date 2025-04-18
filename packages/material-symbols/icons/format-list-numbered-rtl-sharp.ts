import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFormatListNumberedRtlSharpIcon],svg[material-symbols-format-list-numbered-rtl-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 22v-1.5h2.5v-.75H18v-1.5h1.5v-.75H17V16h4v2.25L20 19l1 .75V22zm0-7v-3.75h2.5v-.75H17V9h4v3.75h-2.5v.75H21V15zm1.5-7V3.5H17V2h3v6zM3 19v-2h12v2zm0-6v-2h12v2zm0-6V5h12v2z"></svg:path>`,
})
export class MaterialSymbolsFormatListNumberedRtlSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
