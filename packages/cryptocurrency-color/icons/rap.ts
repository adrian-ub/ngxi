import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorRapIcon],svg[cryptocurrency-color-rap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#000"></svg:circle><svg:path fill="#FFF" d="M12.478 6.435v19.478H9V6h3.478zM14.957 6h1.956c4.044 0 6.74 2.565 6.74 6.217c0 2.957-1.61 5.218-4.523 5.957l5.087 7.739H20.13L13.174 15.13h3.348c2.217 0 3.608-1 3.608-2.956c0-1.957-1.39-2.957-3.608-2.957H15V6z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorRapIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
