import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilSortDescendingIcon],svg[cil-sort-descending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 288h120v32H184zm0-72h184v32H184zm0-72h248v32H184zm0-72h312v32H184z"></svg:path><svg:path fill="currentColor" d="M95.196 16v417.568l-51.883-51.882l-22.626 22.627l90.509 90.51l90.509-90.51l-22.627-22.626l-51.882 51.881V16z"></svg:path>`,
})
export class CilSortDescendingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
