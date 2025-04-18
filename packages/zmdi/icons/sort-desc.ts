import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiSortDescIcon],svg[zmdi-sort-desc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M282 76H135l74-73zM135 420h147l-73 73zm131-137h81l-40-111zm24-158h34l93 246h-38l-19-53H254l-20 53h-38zM52 337h132v34H0v-28l128-183H1v-35h179v27z"></svg:path>`,
})
export class ZmdiSortDescIcon {
  readonly viewBox = input("0 0 424 496")
  readonly width = input("0.86em")
  readonly height = input("1em")
}
