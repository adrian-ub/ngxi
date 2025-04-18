import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[etPhoneIcon],svg[et-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M1.5 32h16c.827 0 1.5-.673 1.5-1.5v-29c0-.827-.673-1.5-1.5-1.5h-16C.673 0 0 .673 0 1.5v29c0 .827.673 1.5 1.5 1.5M1 1.5a.5.5 0 0 1 .5-.5h16a.5.5 0 0 1 .5.5v29a.5.5 0 0 1-.5.5h-16a.5.5 0 0 1-.5-.5z"></svg:path><svg:path d="M2.5 27h14a.5.5 0 0 0 .5-.5v-21a.5.5 0 0 0-.5-.5h-14a.5.5 0 0 0-.5.5v21a.5.5 0 0 0 .5.5M3 6h13v20H3z"></svg:path><svg:circle cx="10" cy="29" r="1"></svg:circle><svg:path d="M7.5 4h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0 0 1"></svg:path></svg:g>`,
})
export class EtPhoneIcon {
  readonly viewBox = input("0 0 19 32")
  readonly width = input("0.6em")
  readonly height = input("1em")
}
