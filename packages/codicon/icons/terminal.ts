import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconTerminalIcon],svg[codicon-terminal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M1.5 3L3 1.5h18L22.5 3v18L21 22.5H3L1.5 21zM3 3v18h18V3z" clip-rule="evenodd"></svg:path><svg:path d="M7.06 7.5L6 8.56l4.243 4.243L6 17.046l1.06 1.06L12 13.168v-.728zm4.94 9h6V18h-6z"></svg:path></svg:g>`,
})
export class CodiconTerminalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
