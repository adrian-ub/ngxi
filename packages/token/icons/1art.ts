import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[token1artIcon],svg[token-1art-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.178 3.276c1.098-.696 2.592.006 2.622 1.212v14.988c0 .84-.876 1.524-1.8 1.524c-.912 0-1.782-.666-1.8-1.5V7.956s-2.442 1.518-3.618 2.124c-.138.072-.288.12-.462.126c-.204 0-.42-.036-.63-.114c-.69-.264-1.32-.93-1.29-1.692c.018-.444.216-.864.654-1.152l.024-.018l6.3-3.96z"></svg:path>`,
})
export class Token1artIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
