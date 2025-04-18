import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFontDownloadOffSharpIcon],svg[material-symbols-font-download-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.475 23.3l-8.35-8.35l1.95-.9l6.875 6.875V22H2V4.825L.675 3.5L2.1 2.075l19.8 19.8zM22 19.125l-6.4-6.4L13.05 6h-2.1l-.575 1.5l-5.5-5.5H22zM6.4 18h2.1l1.1-3.05h2.525l-1.85-1.85L8.8 11.625zm5.55-9.75h.1l.5 1.425l-.825-.825zM15.5 18h2.1l-.25-.675l-3.275-3.275z"></svg:path>`,
})
export class MaterialSymbolsFontDownloadOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
