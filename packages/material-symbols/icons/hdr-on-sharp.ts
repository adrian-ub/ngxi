import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHdrOnSharpIcon],svg[material-symbols-hdr-on-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 15V9h4.25l.75.75v2.4l-.75.75h-.15L21 15h-1.5l-.9-2h-1.1v2zm1.5-3.5h2v-1h-2zM3 15V9h1.5v2h2V9H8v6H6.5v-2.5h-2V15zm6.5 0V9h4.25l.75.75v4.5l-.75.75zm1.5-1.5h2v-3h-2z"></svg:path>`,
})
export class MaterialSymbolsHdrOnSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
