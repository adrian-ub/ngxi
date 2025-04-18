import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsTreeAltIcon],svg[bxs-tree-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 10l-6-8l-6 8h3l-5 8h7v4h2v-4h7l-5-8z"></svg:path>`,
})
export class BxsTreeAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
