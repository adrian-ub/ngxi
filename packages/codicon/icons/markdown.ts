import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconMarkdownIcon],svg[codicon-markdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.345 5h2.1v6.533H6.993l.055-5.31l-1.774 5.31H4.072l-1.805-5.31c.04.644.06 5.31.06 5.31H1V5h2.156s1.528 4.493 1.577 4.807zm6.71 3.617v-3.5H11.11v3.5H9.166l2.917 2.916L15 8.617z"></svg:path>`,
})
export class CodiconMarkdownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
