import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconTerminalTmuxIcon],svg[codicon-terminal-tmux-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 1h-12l-.5.5v13l.5.5h12l.5-.5v-13zM7 7.5V13H2V2h5zm6 5.5H8V8h5zm0-6H8V2h5z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconTerminalTmuxIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
