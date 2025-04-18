import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenIgnisIcon],svg[token-ignis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.769 5.534L10.846 3l-3 7.578l1.92 3.499zm2.77 4.158l-2.285-3.868l-8.792 15.138h4.408zM14.963 15l-3.424 6l5.538-3.286z"></svg:path>`,
})
export class TokenIgnisIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
