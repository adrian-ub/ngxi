import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[etTabletIcon],svg[et-tablet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M1.5 32h22c.827 0 1.5-.673 1.5-1.5v-29c0-.827-.673-1.5-1.5-1.5h-22C.673 0 0 .673 0 1.5v29c0 .827.673 1.5 1.5 1.5M1 1.5a.5.5 0 0 1 .5-.5h22a.5.5 0 0 1 .5.5v29a.5.5 0 0 1-.5.5h-22a.5.5 0 0 1-.5-.5z"></svg:path><svg:path d="M3.5 27h18a.5.5 0 0 0 .5-.5v-23a.5.5 0 0 0-.5-.5h-18a.5.5 0 0 0-.5.5v23a.5.5 0 0 0 .5.5M4 4h17v22H4z"></svg:path><svg:circle cx="13" cy="29" r="1"></svg:circle></svg:g>`,
})
export class EtTabletIcon {
  readonly viewBox = input("0 0 25 32")
  readonly width = input("0.79em")
  readonly height = input("1em")
}
