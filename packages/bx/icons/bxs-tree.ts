import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsTreeIcon],svg[bx-bxs-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M20 18l-4-5h3l-4-5h2l-5-6l-5 6h2l-4 5h3l-4 5h7v4h2v-4z" fill="currentColor"></svg:path>`,
})
export class BxBxsTreeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
