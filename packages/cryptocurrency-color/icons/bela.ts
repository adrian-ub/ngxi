import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorBelaIcon],svg[cryptocurrency-color-bela-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#13a0f6"></svg:circle><svg:path fill="#fff" d="M8.297 11.568A2.42 2.42 0 0 1 7 9.422a2.416 2.416 0 1 1 4.553-1.134a8.9 8.9 0 0 1 4.501-1.216c4.94 0 8.946 4.014 8.946 8.964S20.995 25 16.054 25s-8.946-4.013-8.946-8.964a8.94 8.94 0 0 1 1.189-4.468m7.757 8.878c2.43 0 4.4-1.974 4.4-4.41s-1.97-4.41-4.4-4.41s-4.4 1.975-4.4 4.41s1.97 4.41 4.4 4.41"></svg:path></svg:g>`,
})
export class CryptocurrencyColorBelaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
