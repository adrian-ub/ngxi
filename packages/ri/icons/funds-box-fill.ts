import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFundsBoxFillIcon],svg[ri-funds-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.005 3.003h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1m11.793 6.793l-2.45 2.45l-2.121-2.122l-4.243 4.243l1.414 1.414l2.829-2.828l2.121 2.12l3.864-3.863l1.793 1.793v-5h-5z"></svg:path>`,
})
export class RiFundsBoxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
