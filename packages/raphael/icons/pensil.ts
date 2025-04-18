import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelPensilIcon],svg[raphael-pensil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.31 2.872L21.926.745a1.826 1.826 0 0 0-2.517.576l-1.335 2.124L24.55 7.51l1.334-2.122c.536-.855.28-1.98-.574-2.516M6.555 21.786l6.474 4.066L23.58 9.054l-6.476-4.067l-10.55 16.8zm-.99 5.166l-.142 3.82l3.38-1.788l3.14-1.658L5.695 23.4z"></svg:path>`,
})
export class RaphaelPensilIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
