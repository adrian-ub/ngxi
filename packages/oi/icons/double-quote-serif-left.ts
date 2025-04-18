import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiDoubleQuoteSerifLeftIcon],svg[oi-double-quote-serif-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1C1.35 1 0 2.35 0 4v3h3V4H1c0-1.11.89-2 2-2zm5 0C6.35 1 5 2.35 5 4v3h3V4H6c0-1.11.89-2 2-2z"></svg:path>`,
})
export class OiDoubleQuoteSerifLeftIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
