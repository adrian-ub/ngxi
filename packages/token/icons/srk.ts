import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenSrkIcon],svg[token-srk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.187 20.437H3l6.187-5.625h6.188zM21 9.188l-5.625 5.624V9.188zm0-5.625l-5.625 5.624V3.563zm-5.625 5.625l-6.188 5.624V9.188zm0-5.625L9.188 9.186V3.563zM9.187 9.188L3 14.811V9.188zM21 14.813l-5.625 5.624v-5.625z"></svg:path><svg:path fill="currentColor" d="M15.375 14.812H9.186l6.188-5.624zm0-5.625H9.188l6.187-5.624z"></svg:path><svg:path fill="currentColor" d="M9.187 14.812H3l6.187-5.624zm0-5.625H3l6.187-5.624zM21 14.812h-5.625L21 9.188zm-5.625 5.625H9.186l6.188-5.625z"></svg:path>`,
})
export class TokenSrkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
