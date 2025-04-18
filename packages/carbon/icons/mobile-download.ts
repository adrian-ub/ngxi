import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonMobileDownloadIcon],svg[carbon-mobile-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m28 25l-1.414-1.414L24 26.172V18h-2v8.172l-2.586-2.586L18 25l5 5z"></svg:path><svg:path fill="currentColor" d="M10 28V10h12v5h2V6a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h6v-2Zm0-22h12v2H10Z"></svg:path>`,
})
export class CarbonMobileDownloadIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
