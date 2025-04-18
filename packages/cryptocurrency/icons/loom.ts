import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyLoomIcon],svg[cryptocurrency-loom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m24.92 15.62l.551-.387l-.005-.006l.697-.487a4.247 4.247 0 0 0 0-6.953l.008.01L22.21 5.02l-4.9 3.429l1.314.925l3.58-2.505l3.09 2.167a2.73 2.73 0 0 1 0 4.473l-1.697 1.184L9.78 5L5.809 7.791a4.247 4.247 0 0 0 0 6.953l1.241.871l-.304.214l.005.007l-.942.658a4.247 4.247 0 0 0 0 6.953l3.957 2.779l4.897-3.429l-1.314-.926l-3.586 2.506l-3.09-2.167a2.73 2.73 0 0 1 0-4.473l1.705-1.19l13.816 9.692l3.972-2.792a4.247 4.247 0 0 0 0-6.953zm-1.326.93l1.697 1.19a2.73 2.73 0 0 1 0 4.473l-3.094 2.164l-12.49-8.757l4.966-3.466l-1.32-.928l-.367.256l-.01-.015l-4.6 3.22L6.683 13.5a2.73 2.73 0 0 1 0-4.473l3.093-2.164l12.492 8.757l-4.974 3.471l1.315.926l3.71-2.592l.01.012zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16"></svg:path>`,
})
export class CryptocurrencyLoomIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
