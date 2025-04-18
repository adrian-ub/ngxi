import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFormatListNumberedRtlIcon],svg[material-symbols-format-list-numbered-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 22v-1.5h2.5v-.75H18v-1.5h1.5v-.75H17V16h3q.425 0 .713.288T21 17v1q0 .425-.288.713T20 19q.425 0 .713.288T21 20v1q0 .425-.288.713T20 22zm0-7v-2.75q0-.425.288-.712T18 11.25h1.5v-.75H17V9h3q.425 0 .713.288T21 10v1.75q0 .425-.288.713T20 12.75h-1.5v.75H21V15zm1.5-7V3.5H17V2h3v6zM3 19v-2h12v2zm0-6v-2h12v2zm0-6V5h12v2z"></svg:path>`,
})
export class MaterialSymbolsFormatListNumberedRtlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
