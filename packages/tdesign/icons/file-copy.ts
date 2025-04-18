import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFileCopyIcon],svg[tdesign-file-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 1h9.414L21 6.586V19H6zm2 2v14h11V9h-6V3zm7 .414V7h3.586zM4 5v16h11v2H2V5z"></svg:path>`,
})
export class TdesignFileCopyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
