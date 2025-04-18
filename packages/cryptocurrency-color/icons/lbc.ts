import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorLbcIcon],svg[cryptocurrency-color-lbc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#006149"></svg:circle><svg:path fill="#fff" fill-rule="nonzero" d="m24.176 17.184l-.797-.199l.242-.97l2.485.621l-.62 2.485l-.971-.242l.215-.862l-8.872 5.493l-9.839-4.916v-3.752l10.224-6.394l9.375 4.573v1.544l-9.759 6.063l-7.247-3.593l.444-.896l6.749 3.346l8.813-5.476v-.363L16.303 9.59L7.02 15.396v2.58l8.787 4.39z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorLbcIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
