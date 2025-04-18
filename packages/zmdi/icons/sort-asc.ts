import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiSortAscIcon],svg[zmdi-sort-asc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M282 76H135l74-73zM135 420h147l-73 73zM70 283h81l-41-111zm23-158h35l93 246h-38l-20-53H57l-19 53H0zm192 212h132v34H233v-28l128-183H234v-35h179v27z"></svg:path>`,
})
export class ZmdiSortAscIcon {
  readonly viewBox = input("0 0 424 496")
  readonly width = input("0.86em")
  readonly height = input("1em")
}
