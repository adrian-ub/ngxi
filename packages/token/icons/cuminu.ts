import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenCuminuIcon],svg[token-cuminu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.5 12l-4 2.5v-5zm1.16-1.5l3.09-2.29l3.09 2.29l3.66-2.625L12.75 3L6 7.875zm0 3l3.09 2.29l3.09-2.29l3.66 2.625L12.75 21L6 16.125z"></svg:path>`,
})
export class TokenCuminuIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
