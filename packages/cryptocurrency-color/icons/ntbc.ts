import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorNtbcIcon],svg[cryptocurrency-color-ntbc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#EEC315"></svg:circle><svg:g fill="#FFF"><svg:path d="M18.99 8.185a.684.684 0 0 0-.684-.685h-5.174l.008.01H8.147C7.513 7.51 7 8.024 7 8.658v14.684c0 .634.513 1.148 1.147 1.148h1.855c.634 0 1.147-.514 1.147-1.148V12.618c0-1.016 1.222-1.531 1.948-.821l3.975 3.886c.659.644 1.725.28 1.918-.55q.03-.129.03-.271z"></svg:path><svg:path d="M23.965 7.51h-2.08c-.57 0-1.034.464-1.034 1.036v11.102c0 .917-1.103 1.382-1.758.74l-4.355-4.257c-.656-.64-1.758-.176-1.758.741v2.364q0 .054.005.108l-.005-.005v4.224c0 .518.419.937.936.937h5.74l-.014-.01h4.323c.572 0 1.035-.464 1.035-1.036V8.546c0-.572-.463-1.036-1.035-1.036"></svg:path></svg:g></svg:g>`,
})
export class CryptocurrencyColorNtbcIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
