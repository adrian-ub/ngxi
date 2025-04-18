import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenKapIcon],svg[token-kap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.738 9.353L4.058 21l5.93-3.23l.323.18l-1.075-3.6l-.53 1.626l-.603-.265l.8-2.461zm8.439 0L19.941 21l-6.072-3.23l-.328.18l1.1-3.6l.54 1.626l.62-.265l-.82-2.461l1.201-3.897zM11.999 3l-2.647 8.195l2.647 8.746l2.647-8.746zm-1.859 8.211L12 5.441l1.858 5.77L12 17.326z"></svg:path>`,
})
export class TokenKapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
