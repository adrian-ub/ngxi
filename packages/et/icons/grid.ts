import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[etGridIcon],svg[et-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M28.5 11a.5.5 0 0 0 0-1H21V2.5a.5.5 0 0 0-1 0V10h-9V2.5a.5.5 0 0 0-1 0V10H2.5a.5.5 0 0 0 0 1H10v9H2.5a.5.5 0 0 0 0 1H10v8.5a.5.5 0 0 0 1 0V21h9v8.5a.5.5 0 0 0 1 0V21h7.5a.5.5 0 0 0 0-1H21v-9zM20 20h-9v-9h9z"></svg:path><svg:path d="M31 30.5v-29c0-.827-.673-1.5-1.5-1.5h-28C.673 0 0 .673 0 1.5v29c0 .827.673 1.5 1.5 1.5h28c.827 0 1.5-.673 1.5-1.5m-30 0v-29a.5.5 0 0 1 .5-.5h28a.5.5 0 0 1 .5.5v29a.5.5 0 0 1-.5.5h-28a.5.5 0 0 1-.5-.5"></svg:path></svg:g>`,
})
export class EtGridIcon {
  readonly viewBox = input("0 0 31 32")
  readonly width = input("0.97em")
  readonly height = input("1em")
}
