import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenTbtcIcon],svg[token-tbtc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0m-2.118 0a6.882 6.882 0 1 1-13.764 0a6.882 6.882 0 0 1 13.764 0M13.06 8.824a1.059 1.059 0 1 1-2.118 0a1.059 1.059 0 0 1 2.118 0m2.118 2.647H8.824v1.058h2.647v3.177h1.058v-3.177h2.648z" clip-rule="evenodd"></svg:path>`,
})
export class TokenTbtcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
