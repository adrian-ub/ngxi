import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mingcuteCurrencyDollar2FillIcon],svg[mingcute-currency-dollar-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M0 0h24v24H0z"></svg:path><svg:path fill="currentColor" d="M13.5 4a1.5 1.5 0 0 0-3 0v.5h-1a4.5 4.5 0 0 0 0 9h5a1.5 1.5 0 0 1 0 3H7a1.5 1.5 0 0 0 0 3h3.5v.5a1.5 1.5 0 0 0 3 0v-.5h1a4.5 4.5 0 1 0 0-9h-5a1.5 1.5 0 1 1 0-3H17a1.5 1.5 0 0 0 0-3h-3.5z"></svg:path></svg:g>`,
})
export class MingcuteCurrencyDollar2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
