import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpSendAndArchiveIcon],svg[ic-sharp-send-and-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 10c.1 0 .19.01.28.01L3 4v6l8 2l-8 2v6l7-2.95V17c0-3.87 3.13-7 7-7"></svg:path><svg:path fill="currentColor" d="M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5m0 8l-3-3h2.5v-3h1v3H20z"></svg:path>`,
})
export class IcSharpSendAndArchiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
