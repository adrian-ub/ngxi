import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconGraphLineIcon],svg[codicon-graph-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15 13v1H1.5l-.5-.5V0h1v13z"></svg:path><svg:path d="M13 3.207L7.854 8.354h-.708L5.5 6.707l-3.646 3.647l-.708-.708l4-4h.708L7.5 7.293l5.146-5.147h.707l2 2l-.707.708z"></svg:path></svg:g>`,
})
export class CodiconGraphLineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
