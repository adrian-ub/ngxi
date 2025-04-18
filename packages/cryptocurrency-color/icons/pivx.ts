import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorPivxIcon],svg[cryptocurrency-color-pivx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#5E4778" fill-rule="nonzero"></svg:circle><svg:path fill="#FFF" stroke="#FFF" d="M10.5 12.241h6.153v1.255H10.5zm12 .59c0 2.974-2.11 4.895-5.028 4.895H13.43V24h-1.6v-7.693h5.425c2.175 0 3.595-1.292 3.595-3.476c0-2.158-1.42-3.413-3.57-3.413h-1.688l-4.043.013V8h5.91c2.93 0 5.04 1.857 5.04 4.831z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorPivxIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
