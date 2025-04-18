import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorRiseIcon],svg[cryptocurrency-color-rise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#f49352"></svg:circle><svg:path fill="#fff" d="M12.605 9.155c-.857 0-1.552-.706-1.552-1.577S11.748 6 12.605 6s1.553.706 1.553 1.578s-.695 1.577-1.553 1.577M19.447 26a1.565 1.565 0 0 1-1.552-1.578c0-.87.695-1.577 1.552-1.577S21 23.551 21 24.422c0 .872-.695 1.578-1.553 1.578m-6.205-11.79a1.38 1.38 0 0 1-1.955-.265a1.43 1.43 0 0 1 .26-1.986l7.158-5.562a1.38 1.38 0 0 1 1.955.265a1.43 1.43 0 0 1-.26 1.987zm.053 5.669a1.38 1.38 0 0 1-1.955-.265a1.43 1.43 0 0 1 .26-1.987l7.158-5.561a1.38 1.38 0 0 1 1.955.265a1.43 1.43 0 0 1-.26 1.986zm0 5.829a1.38 1.38 0 0 1-1.955-.265a1.43 1.43 0 0 1 .26-1.987l7.158-5.561a1.38 1.38 0 0 1 1.955.265a1.43 1.43 0 0 1-.26 1.986z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorRiseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
