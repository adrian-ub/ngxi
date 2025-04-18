import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqExchangeIcon],svg[marketeq-exchange-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m14.583 35.417l-6.25-6.25h33.334"></svg:path><svg:path stroke="#306CFE" d="m35.417 14.583l6.25 6.25H8.333"></svg:path></svg:g>`,
})
export class MarketeqExchangeIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
