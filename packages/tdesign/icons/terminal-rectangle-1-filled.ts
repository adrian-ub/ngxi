import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTerminalRectangle1FilledIcon],svg[tdesign-terminal-rectangle-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 8.005V3H1v5.005zm0 1.99H1V21h22zM7 12.084l3.414 3.414L7 18.912l-1.414-1.414l2-2l-2-2zm5 4.414h6v2h-6z"></svg:path>`,
})
export class TdesignTerminalRectangle1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
