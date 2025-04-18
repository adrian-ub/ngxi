import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconListFlatIcon],svg[codicon-list-flat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 9h9v1H2zm0 3h8v1H2zm0-6h12v1H2zm0-3h11v1H2z"></svg:path>`,
})
export class CodiconListFlatIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
