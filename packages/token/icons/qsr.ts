import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenQsrIcon],svg[token-qsr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.477 21l-5.04-9.281L3 7.635v-.698A3.937 3.937 0 0 1 6.937 3h.585l5.04 9.281L21 16.236v.826A3.937 3.937 0 0 1 17.063 21z"></svg:path>`,
})
export class TokenQsrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
