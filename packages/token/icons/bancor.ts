import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBancorIcon],svg[token-bancor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.083 3L6.588 5.598l4.495 2.61l4.495-2.61zm-5.098 8.83l4.484 2.588V9.234L5.985 6.646zm0 6.581L10.468 21v-5.183l-4.484-2.589zm10.197-6.581l-4.484 2.588V9.234l4.484-2.588zm1.834.34v5.184L11.698 21v-5.183z"></svg:path>`,
})
export class TokenBancorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
