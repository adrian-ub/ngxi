import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedDegoIcon],svg[token-branded-dego-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FF5174" d="M4.125 3h3.938v3.938H4.124z"></svg:path><svg:path fill="#787878" d="m15.938 3l3.937 3.938h-3.937zm0 18l3.937-3.937h-3.937z"></svg:path><svg:path fill="#4F4F4F" d="M8.063 3h7.874v3.938H8.064zM4.124 17.063h11.813V21H4.124z"></svg:path><svg:path fill="#FFD766" d="M4.125 6.938h3.938v4.5H4.124z"></svg:path><svg:path fill="#4F4F4F" d="M15.938 6.938h3.937v10.125h-3.937z"></svg:path><svg:path fill="#21D99D" d="M4.125 10.875h3.938v6.188H4.124z"></svg:path></svg:g>`,
})
export class TokenBrandedDegoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
