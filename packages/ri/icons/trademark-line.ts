import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riTrademarkLineIcon],svg[ri-trademark-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 6v2H6v10H4V8H0V6zm2 0h2.5l3 5.196L20.5 6H23v12h-2V9.133l-3.5 6.063L14 9.135V18h-2z"></svg:path>`,
})
export class RiTrademarkLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
