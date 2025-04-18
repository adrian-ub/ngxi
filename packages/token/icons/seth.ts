import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenSethIcon],svg[token-seth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.615 17.615A7.942 7.942 0 1 1 6.385 6.383a7.942 7.942 0 0 1 11.23 11.232m.749.749A9 9 0 1 1 5.636 5.637a9 9 0 0 1 12.728 12.727M18.882 12a6.882 6.882 0 1 1-13.764 0a6.882 6.882 0 0 1 13.764 0M12 6.706L8.824 12L12 13.853L15.177 12zm0 7.941l-3.176-2.118L12 17.294l3.177-4.765z" clip-rule="evenodd"></svg:path>`,
})
export class TokenSethIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
