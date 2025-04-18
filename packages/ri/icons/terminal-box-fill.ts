import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riTerminalBoxFillIcon],svg[ri-terminal-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m9 12v2h6v-2zm-3.586-3l-2.828 2.828L7 16.243L11.243 12L7 7.757L5.586 9.172z"></svg:path>`,
})
export class RiTerminalBoxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
