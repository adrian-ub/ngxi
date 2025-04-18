import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedKlimaIcon],svg[token-branded-klima-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#00CD34"><svg:path fill-rule="evenodd" d="m21 3.563l-8.995 13.5l-8.988-13.5zm-2.183 1.125L12 14.813L5.182 4.688z" clip-rule="evenodd"></svg:path><svg:path d="m11.995 6.938l8.988 13.5h-5.045v-1.125h2.88L12 9.188L5.183 19.313h2.88v1.125H3z"></svg:path><svg:path d="M4.125 11.438h15.75v1.124H4.125z"></svg:path></svg:g>`,
})
export class TokenBrandedKlimaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
