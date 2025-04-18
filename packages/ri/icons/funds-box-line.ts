import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFundsBoxLineIcon],svg[ri-funds-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.005 5.003v14h16v-14zm-1-2h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1m11.793 6.793l-1.793-1.793h5v5l-1.793-1.793l-3.864 3.864l-2.121-2.121l-2.829 2.828l-1.414-1.414l4.243-4.243l2.121 2.121z"></svg:path>`,
})
export class RiFundsBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
