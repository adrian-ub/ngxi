import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorActIcon],svg[cryptocurrency-color-act-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#767DFF" fill-rule="nonzero"></svg:circle><svg:path fill="#FFF" d="M13.77 6.5h4.46a.87.87 0 0 1 .759.444l6.906 12.319a.87.87 0 0 1 0 .85l-2.21 3.942a.87.87 0 0 1-.758.445H9.073a.87.87 0 0 1-.759-.445l-2.209-3.942a.87.87 0 0 1 0-.85l6.906-12.319a.87.87 0 0 1 .759-.444M16 11.401l-4.653 8.287h9.306z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorActIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
