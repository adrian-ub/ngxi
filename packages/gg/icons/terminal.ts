import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggTerminalIcon],svg[gg-terminal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m5.033 14.828l1.415 1.415L10.69 12L6.448 7.757L5.033 9.172L7.862 12zM15 14h-4v2h4z"></svg:path><svg:path fill-rule="evenodd" d="M2 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm20 2H2v16h20z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgTerminalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
