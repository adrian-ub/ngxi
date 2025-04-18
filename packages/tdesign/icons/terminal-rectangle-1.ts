import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTerminalRectangle1Icon],svg[tdesign-terminal-rectangle-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3h22v18H1zm2 2v3h18V5zm18 5H3v9h18zM7 11.086l3.414 3.414L7 17.914L5.586 16.5l2-2l-2-2zM12 15h6v2h-6z"></svg:path>`,
})
export class TdesignTerminalRectangle1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
