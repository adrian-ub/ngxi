import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorEquaIcon],svg[cryptocurrency-color-equa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#F68922"></svg:circle><svg:path fill="#FFF" d="M16.72 10.078s-4.127.606-4.728 5.193c0 0-.638 5.134 4.608 6.52a4.4 4.4 0 0 0 1.113.143h.258c.534 0 1.046.214 1.424.594s.59.896.59 1.434a2.014 2.014 0 0 1-1.856 2.022c-2.579.174-6.04-1.092-8.286-4.136c0 0-4.399-6.325.395-12.137a10.2 10.2 0 0 1 4.277-3.072c1.97-.737 4.856-1.211 7.361.756c0 0 3.353 2.597 1.634 6.837c0 0-1.204 3.375-5.33 3.635l-.573-.032a1.9 1.9 0 0 1-1.414-.691a1.92 1.92 0 0 1-.413-1.527a1.904 1.904 0 0 1 1.818-1.605l.582-.04s1.977-.086 1.805-2.423c0 0-.172-2.077-3.266-1.47"></svg:path></svg:g>`,
})
export class CryptocurrencyColorEquaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
