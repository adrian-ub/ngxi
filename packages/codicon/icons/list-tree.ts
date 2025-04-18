import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconListTreeIcon],svg[codicon-list-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4 9h9v1H4zm0 3h7v1H4zm0-6h10v1H4zM1 3h11v1H1z"></svg:path><svg:path d="M4 4h1v9H4z"></svg:path></svg:g>`,
})
export class CodiconListTreeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
