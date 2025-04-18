import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinTreeTableIcon],svg[vaadin-tree-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 10V8H4V7h1V5H2v2h1v6h3v-2H4v-1z"></svg:path><svg:path fill="currentColor" d="M0 0v16h16V0zm7 15H1V3h6zm4 0H8V3h3zm4 0h-3V3h3z"></svg:path>`,
})
export class VaadinTreeTableIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
