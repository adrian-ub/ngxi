import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiTunnelIcon],svg[maki-tunnel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2C2.343 2 1 3.327 1 4.964v7.048c0 .546.448.988 1 .988h1V8.554c0-2.456 2.015-4.446 4.5-4.446S12 6.098 12 8.554V13h1c.552 0 1-.442 1-.988V4.964C14 3.327 12.657 2 11 2zm7 8v-.952c0-2.183-1.567-3.952-3.5-3.952S4 6.866 4 9.048V13z"></svg:path>`,
})
export class MakiTunnelIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
