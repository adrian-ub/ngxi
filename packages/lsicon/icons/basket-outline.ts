import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconBasketOutlineIcon],svg[lsicon-basket-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="m13.5 5.5l-1 7h-9l-1-7m11 0h-11m11 0H15m-12.5 0H1m4 0l3-2l3 2m-1 2v3m-4-3v3m2-3v3"></svg:path>`,
})
export class LsiconBasketOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
