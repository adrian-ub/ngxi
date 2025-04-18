import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiVectorTriangleIcon],svg[mdi-vector-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3v6h.73l-3.94 7H2v6h6v-2h8v2h6v-6h-3.79l-3.94-7H15V3m-4 2h2v2h-2m1 2.04l4 7.11V18H8v-1.85M4 18h2v2H4m14-2h2v2h-2"></svg:path>`,
})
export class MdiVectorTriangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
