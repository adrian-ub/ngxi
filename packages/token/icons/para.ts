import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenParaIcon],svg[token-para-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.924 9.869l7.996 4.318a1.34 1.34 0 0 0 1.271 0l6.888-3.728a1.697 1.697 0 0 0 0-3.02L12.207 3.2a1.64 1.64 0 0 0-1.563 0L3.919 6.856a1.698 1.698 0 0 0 0 3.014z"></svg:path><svg:path fill="currentColor" d="m5.622 12.581l6.376 3.374c.422.225.94.225 1.35-.017l4.909-2.828l1.816.978a1.7 1.7 0 0 1 0 3.02l-6.883 3.728a1.33 1.33 0 0 1-1.27 0l-7.996-4.313a1.697 1.697 0 0 1-.006-3.02z"></svg:path>`,
})
export class TokenParaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
