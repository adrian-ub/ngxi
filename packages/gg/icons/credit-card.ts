import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggCreditCardIcon],svg[gg-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4 9a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1"></svg:path><svg:path fill-rule="evenodd" d="M4 3a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4zm16 2H4a2 2 0 0 0-2 2v7h20V7a2 2 0 0 0-2-2m2 11H2v1a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgCreditCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
