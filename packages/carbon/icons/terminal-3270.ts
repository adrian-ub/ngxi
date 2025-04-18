import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTerminal3270Icon],svg[carbon-terminal-3270-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 21h6v2h-6z"></svg:path><svg:path fill="currentColor" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 2v4H6V6ZM6 26V12h20v14Z"></svg:path>`,
})
export class CarbonTerminal3270Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
