import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riExchange2FillIcon],svg[ri-exchange-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 21.5a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m10-10a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9M3 8a5 5 0 0 1 5-5h3v2H8a3 3 0 0 0-3 3v3H3zm16 5v3a3 3 0 0 1-3 3h-3v2h3a5 5 0 0 0 5-5v-3z"></svg:path>`,
})
export class RiExchange2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
