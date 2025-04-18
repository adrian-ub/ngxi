import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsDownloadOptionIcon],svg[grommet-icons-download-option-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12s-5.373 12-12 12M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2S2 6.477 2 12m14.293-.707L13 14.586V6h-2v8.586l-3.293-3.293l-1.414 1.414l5 5l.707.707l.707-.707l5-5z" clip-rule="evenodd"></svg:path>`,
})
export class GrommetIconsDownloadOptionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
