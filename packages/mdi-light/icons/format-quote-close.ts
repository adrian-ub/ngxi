import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightFormatQuoteCloseIcon],svg[mdi-light-format-quote-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 6v8l-1.95 4h-4.2l1.95-4H12V6zm-1 7.77V7h-4v6h2.4l-1.95 4h1.97zM11 6v8l-1.95 4h-4.2l1.95-4H5V6zm-1 7.77V7H6v6h2.4l-1.95 4h1.97z"></svg:path>`,
})
export class MdiLightFormatQuoteCloseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
