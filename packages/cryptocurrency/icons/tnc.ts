import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyTncIcon],svg[cryptocurrency-tnc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16m2.226-18.196l-1.83 3.114l2.132 3.481l-8.412-.002l-1.87 3.103h15.613zm-5.75 2.256h3.659l2.001-3.555l4.12 7.16H26L18.203 6.542zm4.885 3.619l-1.83-3.115h-4.167l4.303-6.918l-1.86-3.146L6 19.625z"></svg:path>`,
})
export class CryptocurrencyTncIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
