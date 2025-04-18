import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riQuoteTextIcon],svg[ri-quote-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4H3v2h18zm0 7H8v2h13zm0 7H8v2h13zM5 11H3v9h2z"></svg:path>`,
})
export class RiQuoteTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
