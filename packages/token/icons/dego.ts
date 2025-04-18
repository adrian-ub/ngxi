import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenDegoIcon],svg[token-dego-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.125 3h3.938v3.938H4.124zm11.813 0l3.937 3.938h-3.937zm0 18l3.937-3.937h-3.937zM8.063 3h7.874v3.938H8.064zM4.124 17.063h11.813V21H4.124z"></svg:path><svg:path fill="currentColor" d="M4.125 6.938h3.938v4.5H4.124zm11.813 0h3.937v10.125h-3.937z"></svg:path><svg:path fill="currentColor" d="M4.125 10.875h3.938v6.188H4.124z"></svg:path>`,
})
export class TokenDegoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
