import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFormatQuoteCloseOutlineIcon],svg[mdi-format-quote-close-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 6v8h1.88l-2 4h5.74L21 13.24V6m-6 2h4v4.76L17.38 16h-1.26l2-4H15M3 6v8h1.88l-2 4h5.74L11 13.24V6M5 8h4v4.76L7.38 16H6.12l2-4H5Z"></svg:path>`,
})
export class MdiFormatQuoteCloseOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
