import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorEdoIcon],svg[cryptocurrency-color-edo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#242424"></svg:circle><svg:path fill="#fff" fill-rule="nonzero" d="m13.06 23.874l2.683-2.697l2.694 2.697l-1.719 1.722a1.377 1.377 0 0 1-1.95 0zm6.95-9.242l-2.692-2.697l2.693-2.697l2.692 2.697zm-.669 8.363l-2.693-2.697l7.23-7.242l1.718 1.721c.539.54.539 1.413 0 1.953zm-7.403-.278L9.246 20.02l7.218-7.23l2.692 2.697zm-3.822-3.8l-1.719-1.722a1.38 1.38 0 0 1 .013-1.952l1.718-1.722l2.693 2.698zM18.883 8.129l-7.23 7.238L8.96 12.67l6.255-6.266a1.377 1.377 0 0 1 1.95 0z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorEdoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
