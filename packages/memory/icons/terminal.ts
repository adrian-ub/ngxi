import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryTerminalIcon],svg[memory-terminal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3v16h-1v1H3v-1H2V3h1V2h16v1zm-2 3H4v12h14zM9 9v1h1v1h1v2h-1v1H9v1H8v1H6v-2h1v-1h1v-2H7v-1H6V8h2v1zm2 7v-2h5v2z"></svg:path>`,
})
export class MemoryTerminalIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
