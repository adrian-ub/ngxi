import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconAddressIcon],svg[picon-address-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 7V1h5v6M0 0v8h7V6l1-1l-1-1l1-1l-1-1l1-1l-1-1M3 3L2 4l1 1.5h1L5 4L4 3m1 0L4 5H3L2 3l1-1h2"></svg:path>`,
})
export class PiconAddressIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
