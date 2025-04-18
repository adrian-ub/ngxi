import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsCoinIcon],svg[bxs-coin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5C7.031 5 2 6.546 2 9.5S7.031 14 12 14s10-1.546 10-4.5S16.97 5 12 5m-5 9.938v3c1.237.299 2.605.482 4 .541v-3a21 21 0 0 1-4-.541m6 .54v3a21 21 0 0 0 4-.541v-3a21 21 0 0 1-4 .541m6-1.181v3c1.801-.755 3-1.857 3-3.297v-3c0 1.44-1.199 2.542-3 3.297m-14 3v-3C3.2 13.542 2 12.439 2 11v3c0 1.439 1.2 2.542 3 3.297"></svg:path>`,
})
export class BxsCoinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
