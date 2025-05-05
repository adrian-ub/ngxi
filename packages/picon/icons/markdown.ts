import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconMarkdownIcon],svg[picon-markdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3V1h1v2h1L6.5 6L5 3M0 6V1h1l1.5 1L4 1h1v5H4V3L2.5 4L1 3v3"></svg:path>`,
})
export class PiconMarkdownIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
