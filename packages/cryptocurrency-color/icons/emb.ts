import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorEmbIcon],svg[cryptocurrency-color-emb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#F6C054"></svg:circle><svg:path fill="#FFF" d="m26.822 15.568l-10.39-10.39a.607.607 0 0 0-.86 0L5.18 15.569a.607.607 0 0 0 0 .86l10.39 10.393a.607.607 0 0 0 .859 0l10.39-10.389a.61.61 0 0 0 .004-.864zm-2.284.52l-7.616 7.616V16h-1.848v7.704l-7.616-7.616a.12.12 0 0 1 0-.172l8.454-8.453a.12.12 0 0 1 .172 0l8.454 8.453a.12.12 0 0 1 0 .172q0-.006 0 0"></svg:path></svg:g>`,
})
export class CryptocurrencyColorEmbIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
