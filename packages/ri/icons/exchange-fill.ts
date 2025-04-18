import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riExchangeFillIcon],svg[ri-exchange-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.005 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10m0-13h-4v2h9l-5-5zm-5 4l5 5v-3h4v-2z"></svg:path>`,
})
export class RiExchangeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
