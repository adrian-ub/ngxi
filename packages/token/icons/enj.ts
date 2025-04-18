import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenEnjIcon],svg[token-enj-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.06 16.8h-8.122c-1.9-.003-3.193-1.354-3.955-3h12.25C20.237 13.8 21 12.974 21 12s-.763-1.8-1.767-1.8H6.818c.6-1.636 2.312-3.002 4.12-3h8.121c1.003 0 1.767-.767 1.767-1.732c0-.974-.774-1.868-1.767-1.868h-8.12C6.551 3.6 3 7.374 3 12v.252c.064 2.181.928 4.25 2.41 5.771c1.48 1.52 3.463 2.373 5.528 2.377h8.121c1.004 0 1.767-.894 1.767-1.868s-.763-1.732-1.767-1.732"></svg:path>`,
})
export class TokenEnjIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
