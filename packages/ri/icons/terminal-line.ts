import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riTerminalLineIcon],svg[ri-terminal-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11 12l-7.071 7.071l-1.414-1.414L8.172 12L2.515 6.343L3.929 4.93zm0 7h10v2H11z"></svg:path>`,
})
export class RiTerminalLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
