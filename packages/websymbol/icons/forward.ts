import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[websymbolForwardIcon],svg[websymbol-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 319h684V0l501 501l-501 499V684H0z"></svg:path>`,
})
export class WebsymbolForwardIcon {
  readonly viewBox = input("0 0 1185 1000")
  readonly width = input("1.19em")
  readonly height = input("1em")
}
