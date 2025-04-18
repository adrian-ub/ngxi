import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiFontIcon],svg[zmdi-font-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m169 248l44-118l44 118zM384 3q18 0 30.5 12.5T427 45v342q0 17-12.5 29.5T384 429H43q-18 0-30.5-12.5T0 387V45q0-17 12.5-29.5T43 3zm-86 352h44L233 77h-40L84 355h45l24-64h120z"></svg:path>`,
})
export class ZmdiFontIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}
