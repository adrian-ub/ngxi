import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorOxyIcon],svg[cryptocurrency-color-oxy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#2261F6"></svg:circle><svg:g fill="#FFF" transform="translate(6.5 5.5)"><svg:ellipse cx="9.5" cy="19.456" rx="1.583" ry="1.544"></svg:ellipse><svg:ellipse cx="9.5" cy="1.544" rx="1.583" ry="1.544"></svg:ellipse><svg:ellipse cx="9.5" cy="6.074" rx="1.267" ry="1.235"></svg:ellipse><svg:ellipse cx="5.067" cy="3.809" rx="1.267" ry="1.235"></svg:ellipse><svg:ellipse cx="5.067" cy="17.294" rx="1.267" ry="1.235"></svg:ellipse><svg:ellipse cx="13.458" cy="8.39" rx="1.267" ry="1.235"></svg:ellipse><svg:ellipse cx="13.458" cy="12.662" rx="1.267" ry="1.235"></svg:ellipse><svg:ellipse cx="9.5" cy="14.927" rx="1.267" ry="1.235"></svg:ellipse><svg:ellipse cx="9.5" cy="10.5" rx="1.003" ry="1"></svg:ellipse><svg:ellipse cx="5.067" cy="12.713" rx="1.003" ry="1"></svg:ellipse><svg:ellipse cx="5.067" cy="8.39" rx="1.003" ry="1"></svg:ellipse><svg:circle cx=".739" cy="6.074" r="1"></svg:circle><svg:circle cx=".739" cy="10.5" r="1"></svg:circle><svg:circle cx=".739" cy="14.926" r="1"></svg:circle><svg:ellipse cx="13.458" cy="3.809" rx="1.583" ry="1.544"></svg:ellipse><svg:ellipse cx="13.458" cy="17.243" rx="1.583" ry="1.544"></svg:ellipse><svg:ellipse cx="17.417" cy="6.073" rx="1.583" ry="1.544"></svg:ellipse><svg:ellipse cx="17.417" cy="14.927" rx="1.583" ry="1.544"></svg:ellipse><svg:ellipse cx="17.417" cy="10.5" rx="1.583" ry="1.544"></svg:ellipse></svg:g></svg:g>`,
})
export class CryptocurrencyColorOxyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
