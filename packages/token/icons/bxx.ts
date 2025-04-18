import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBxxIcon],svg[token-bxx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 8.667h3.195A1.833 1.833 0 0 1 7.03 10.5a1.267 1.267 0 0 1-1.267 1.267H5.71A1.534 1.534 0 0 1 7.238 13.3a2.034 2.034 0 0 1-2.033 2.033H2zm1.429.952h1.428a.952.952 0 0 1 0 1.905H3.43zm0 2.857h1.428a.952.952 0 1 1 0 1.905H3.43z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M7.714 8.667h1.924l4.743 6.666h-1.924z"></svg:path><svg:path fill="currentColor" d="M13.905 8.667H11.98l-4.743 6.666h1.924zm1.429 0h1.923L22 15.333h-1.924z"></svg:path><svg:path fill="currentColor" d="M21.524 8.667H19.6l-4.743 6.666h1.924z"></svg:path>`,
})
export class TokenBxxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
