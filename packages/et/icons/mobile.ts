import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[etMobileIcon],svg[et-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M1.5 32h14a.5.5 0 0 0 0-1h-14a.5.5 0 0 1-.5-.5v-29a.5.5 0 0 1 .5-.5h21a.5.5 0 0 1 .5.5v5a.5.5 0 0 0 1 0v-5c0-.827-.673-1.5-1.5-1.5h-21C.673 0 0 .673 0 1.5v29c0 .827.673 1.5 1.5 1.5"></svg:path><svg:path d="M18 10.5v20c0 .827.673 1.5 1.5 1.5h11c.827 0 1.5-.673 1.5-1.5v-20c0-.827-.673-1.5-1.5-1.5h-11c-.827 0-1.5.673-1.5 1.5m13 0v20a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-20a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5"></svg:path><svg:circle cx="12" cy="28" r="1"></svg:circle><svg:circle cx="25" cy="28" r="1"></svg:circle></svg:g>`,
})
export class EtMobileIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
