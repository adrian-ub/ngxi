import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggListTreeIcon],svg[gg-list-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 1H1v8h8V6h2v14h4v3h8v-8h-8v3h-2V6h2v3h8V1h-8v3H9zm12 2h-4v4h4zm-4 14h4v4h-4z" clip-rule="evenodd"></svg:path>`,
})
export class GgListTreeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
