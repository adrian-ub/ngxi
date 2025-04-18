import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDownload2OutlineIcon],svg[material-symbols-light-download-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21v-1h14v1zm6.98-3.77L6.367 9.79h3.269V3h4.711v6.789h3.27zm0-1.634l3.574-4.788h-2.208V4h-2.711v6.808H8.427zm.02-4.788"></svg:path>`,
})
export class MaterialSymbolsLightDownload2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
