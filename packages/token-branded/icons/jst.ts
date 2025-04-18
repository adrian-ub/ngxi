import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedJstIcon],svg[token-branded-jst-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#B41514"><svg:path d="M14.119 5.118a2.118 2.118 0 1 1-4.235 0a2.118 2.118 0 0 1 4.235 0m0 13.764a2.118 2.118 0 1 1-4.235 0a2.118 2.118 0 0 1 4.235 0m-10.06-5.824h15.884v2.648H4.06z"></svg:path><svg:path d="M3.529 3.528c.201 4.42 3.917 7.942 8.47 7.942c4.555 0 8.27-3.522 8.472-7.942h-2.665c-.27 2.912-2.767 5.192-5.805 5.192c-3.039 0-5.534-2.28-5.805-5.192z"></svg:path></svg:g>`,
})
export class TokenBrandedJstIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
