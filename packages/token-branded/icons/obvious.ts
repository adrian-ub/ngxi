import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedObviousIcon],svg[token-branded-obvious-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#A1E5CE"><svg:path d="M9.31 18.327q-1.888 0-3.308-.83a5.97 5.97 0 0 1-2.211-2.295Q3 13.722 3 11.79q0-1.933.79-3.396A5.94 5.94 0 0 1 6.003 6.08q1.421-.831 3.307-.831q1.87 0 3.29.83a5.77 5.77 0 0 1 2.21 2.313q.792 1.462.792 3.396q0 1.932-.791 3.413a5.8 5.8 0 0 1-2.211 2.294q-1.42.831-3.29.831m0-2.077q1.797 0 2.858-1.192q1.078-1.192 1.078-3.27q0-2.076-1.078-3.269q-1.06-1.192-2.859-1.192q-1.797 0-2.876 1.192q-1.078 1.193-1.078 3.27t1.078 3.269q1.08 1.192 2.876 1.192"></svg:path><svg:path fill-rule="evenodd" d="m21 6.114l-2.978-.524l-1.08 9.003l1.986.35zm-3.765 12.617a1.258 1.258 0 1 0 .438-2.477a1.258 1.258 0 1 0-.438 2.477" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class TokenBrandedObviousIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
