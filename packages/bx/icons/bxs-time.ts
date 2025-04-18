import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsTimeIcon],svg[bx-bxs-time-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12.25 2c-5.514 0-10 4.486-10 10s4.486 10 10 10s10-4.486 10-10s-4.486-10-10-10zM18 13h-6.75V6h2v5H18v2z" fill="currentColor"></svg:path>`,
})
export class BxBxsTimeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
