import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCompressIcon],svg[material-symbols-compress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 14v-2h16v2zm0-3V9h16v2zm7 11v-3.2l-1.6 1.6L8 19l4-4l4 4l-1.4 1.4l-1.6-1.55V22zm1-14L8 4l1.4-1.4L11 4.2V1h2v3.2l1.6-1.6L16 4z"></svg:path>`,
})
export class MaterialSymbolsCompressIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
