import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCreativeMarketIcon],svg[hugeicons-creative-market-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.796 2.913a3.12 3.12 0 0 1 2.36-.91l5.603.277a3.12 3.12 0 0 1 2.96 2.961l.277 5.604a3.12 3.12 0 0 1-.91 2.359l-7.578 7.578a4.16 4.16 0 0 1-5.88 0l-4.41-4.41a4.16 4.16 0 0 1 0-5.88zM17.5 6.5h-.009m-4.509 5.706L10 14m0 0l-2.98 1.794M10 14l.019 3.5M10 14l-.018-3.5M10 14l3 1.706M10 14l-3-1.707" color="currentColor"></svg:path>`,
})
export class HugeiconsCreativeMarketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
