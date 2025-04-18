import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignOperaIcon],svg[tdesign-opera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.498 5h1.5c3.66 0 6.065 1.464 7.578 3.51c1.01 1.365 1.593 2.947 1.933 4.43a10.3 10.3 0 0 1 2.169-1.238a12.4 12.4 0 0 1 1.943-.642c.528-.123 1.067-.21 1.6-.312l-1.376 8.253L2.217 19l-1.5-6h1.28c1.022 0 1.899.105 2.596.236l-.921-3.225h1.326c1.296 0 2.554.231 3.503.467a38 38 0 0 0-1.426-4.094zm2.587 7.723c-.24-.078-.559-.174-.932-.27a15 15 0 0 0-1.804-.35L7.751 17h2.125q-.035-.26-.081-.573a47 47 0 0 0-.71-3.705M11.893 17h4.086a24 24 0 0 0-.124-1.884c-.21-1.79-.718-3.838-1.887-5.418c-.927-1.253-2.31-2.27-4.464-2.592a44 44 0 0 1 1.398 4.613a49 49 0 0 1 .99 5.281m6.087 0h2.17l.596-3.575q-.138.054-.284.116c-.894.381-1.872.953-2.578 1.763c.052.568.08 1.164.094 1.642zM5.67 17l-.445-1.555a9 9 0 0 0-.5-.136a11 11 0 0 0-1.43-.242L3.778 17z"></svg:path>`,
})
export class TdesignOperaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
