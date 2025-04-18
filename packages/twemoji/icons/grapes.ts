import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiGrapesIcon],svg[twemoji-grapes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#77B255" d="M9.999 12a1 1 0 0 1-.446-.106c-4.38-2.19-7.484-7.526-8.501-10.578A.999.999 0 1 1 2.949.683c.877 2.632 3.688 7.517 7.499 9.422A1 1 0 0 1 9.999 12"></svg:path><svg:circle cx="19" cy="29" r="7" fill="#553788"></svg:circle><svg:circle cx="10" cy="15" r="7" fill="#9266CC"></svg:circle><svg:circle cx="19" cy="12" r="7" fill="#AA8DD8"></svg:circle><svg:circle cx="27" cy="18" r="7" fill="#744EAA"></svg:circle><svg:circle cx="9" cy="26" r="7" fill="#744EAA"></svg:circle><svg:circle cx="18" cy="21" r="7" fill="#9266CC"></svg:circle><svg:circle cx="29" cy="29" r="7" fill="#9266CC"></svg:circle>`,
})
export class TwemojiGrapesIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
