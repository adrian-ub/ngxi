import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorAutoIcon],svg[cryptocurrency-color-auto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#FAB431"></svg:circle><svg:path fill="#FFF" d="m24.5 19.267l-4.185-2.511l.48-1.989l1.787 1.055V12.19l-5.74-3.422v7.9l-1.365.755l7.538 4.47L16 26l-8.5-4.978v-9.955L16 6l8.5 5.067zM9.418 12.19v6.478l5.518-3.2V8.9zm4.097 6.344l-3.138 1.919L16 23.745l3.175-1.86z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorAutoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
