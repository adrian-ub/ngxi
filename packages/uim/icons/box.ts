import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimBoxIcon],svg[uim-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.23 7.24L12 12L3.77 7.24a2 2 0 0 1 .7-.71L11 2.76c.62-.35 1.38-.35 2 0l6.53 3.77c.29.173.531.418.7.71" opacity=".25"></svg:path><svg:path fill="currentColor" d="M12 12v9.5a2.1 2.1 0 0 1-.91-.21L4.5 17.48a2 2 0 0 1-1-1.73v-7.5a2.06 2.06 0 0 1 .27-1.01z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M20.5 8.25v7.5a2 2 0 0 1-1 1.73l-6.62 3.82c-.275.13-.576.198-.88.2V12l8.23-4.76c.175.308.268.656.27 1.01"></svg:path>`,
})
export class UimBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
