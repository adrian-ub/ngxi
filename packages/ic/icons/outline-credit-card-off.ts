import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineCreditCardOffIcon],svg[ic-outline-credit-card-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.83 4H20c1.11 0 2 .89 2 2v12c0 .34-.08.66-.23.94L20 17.17V12h-5.17l-4-4H20V6H8.83zm13.66 19.31L17.17 20H4c-1.11 0-2-.89-2-2l.01-12c0-.34.08-.66.23-.93L.69 3.51L2.1 2.1l19.8 19.8zM4 6.83V8h1.17zM15.17 18l-6-6H4v6z"></svg:path>`,
})
export class IcOutlineCreditCardOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
