import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiCoffeeIcon],svg[mynaui-coffee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 10h1.5a2.5 2.5 0 0 1 0 5H18m0-5c0-.53-.36-1-.923-1H4.923A.923.923 0 0 0 4 9.923V17a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-2m0-5v5M16 3l-2 3m-1-3l-2 3m-1-3L8 6"></svg:path>`,
})
export class MynauiCoffeeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
