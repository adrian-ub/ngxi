import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpFontDownloadIcon],svg[ic-sharp-font-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.93 13.5h4.14L12 7.98zM22 2H2v20h20zm-6.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13z"></svg:path>`,
})
export class IcSharpFontDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
