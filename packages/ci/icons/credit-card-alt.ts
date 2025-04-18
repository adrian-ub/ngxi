import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciCreditCardAltIcon],svg[ci-credit-card-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2ZM4 6v12h16V6H4Zm11.5 10a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5Zm-4 0a2.5 2.5 0 0 1 0-5c.543 0 1.07.18 1.5.512a2.476 2.476 0 0 0 0 3.975a2.46 2.46 0 0 1-1.5.513Z"></svg:path>`,
})
export class CiCreditCardAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
