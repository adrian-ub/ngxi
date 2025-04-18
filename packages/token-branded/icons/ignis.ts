import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedIgnisIcon],svg[token-branded-ignis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F9C011" d="M14.769 5.534L10.846 3l-3 7.578l1.92 3.499z"></svg:path><svg:path fill="#DD6F2C" d="m17.539 9.692l-2.285-3.868l-8.792 15.138h4.408z"></svg:path><svg:path fill="#B6230B" d="m14.963 15l-3.424 6l5.538-3.286z"></svg:path></svg:g>`,
})
export class TokenBrandedIgnisIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
