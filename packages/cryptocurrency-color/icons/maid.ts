import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorMaidIcon],svg[cryptocurrency-color-maid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#5592D7"></svg:circle><svg:g fill="#FFF" fill-rule="nonzero"><svg:path d="M20.246 12.667V25.64L9.29 19.333c-3.24-1.897-3.034-3.077-3.034-5.64l11.263 6.512v-5.949l2.726-1.59z"></svg:path><svg:path d="M17.52 20.205L6.257 13.692l10.954-6.307c3.24-1.847 4.166-1.077 6.429.205l-11.263 6.513l5.143 2.974z" opacity=".6"></svg:path><svg:path d="M12.377 14.103L23.64 7.59v12.615c0 3.744-1.131 4.154-3.394 5.436V12.667L15.05 15.64z" opacity=".2"></svg:path></svg:g></svg:g>`,
})
export class CryptocurrencyColorMaidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
