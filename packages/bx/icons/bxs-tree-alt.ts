import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsTreeAltIcon],svg[bx-bxs-tree-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M18 10l-6-8l-6 8h3l-5 8h7v4h2v-4h7l-5-8h3z" fill="currentColor"></svg:path>`,
})
export class BxBxsTreeAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
