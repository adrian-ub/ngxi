import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riExchange2LineIcon],svg[ri-exchange-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 21.5a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m10-10a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m-10 8a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m10-10a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M3 8a5 5 0 0 1 5-5h3v2H8a3 3 0 0 0-3 3v3H3zm18 5h-2v3a3 3 0 0 1-3 3h-3v2h3a5 5 0 0 0 5-5z"></svg:path>`,
})
export class RiExchange2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
