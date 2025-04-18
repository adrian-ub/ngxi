import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsTerminalIcon],svg[file-icons-terminal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M475.429 36.571H36.57C16.371 36.571 0 52.943 0 73.143v365.714c0 20.2 16.371 36.572 36.571 36.572H475.43c20.2 0 36.571-16.372 36.571-36.572V73.143c0-20.2-16.371-36.572-36.571-36.572m-402.286 256l73.143-73.142l-73.143-73.143l36.571-36.572L219.43 219.43L109.714 329.143zm292.571 36.572H219.43V292.57h146.285z"></svg:path>`,
})
export class FileIconsTerminalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
