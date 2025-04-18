import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiTerminalLineIcon],svg[gravity-ui-terminal-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.22 11.22a.75.75 0 1 0 1.06 1.06l3.75-3.75a.75.75 0 0 0 0-1.06L2.28 3.72a.75.75 0 0 0-1.06 1.06L4.44 8zm13.03 1.28a.75.75 0 0 0 0-1.5h-6.5a.75.75 0 0 0 0 1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiTerminalLineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
