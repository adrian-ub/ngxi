import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxTerminalIcon],svg[bx-terminal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14h6v2h-6zM6.293 9.707L8.586 12l-2.293 2.293l1.414 1.414L11.414 12L7.707 8.293z"></svg:path><svg:path fill="currentColor" d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2M4 18V6h16l.002 12z"></svg:path>`,
})
export class BxTerminalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
