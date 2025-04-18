import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilSortAscendingIcon],svg[cil-sort-ascending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m43.314 130.51l51.882-51.883v417.569h32V78.627l51.883 51.883l22.627-22.627l-90.51-90.511l-90.51 90.511z"></svg:path><svg:path fill="currentColor" d="M184 160h120v32H184zm0 72h184v32H184zm0 72h248v32H184zm0 72h312v32H184z"></svg:path>`,
})
export class CilSortAscendingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
