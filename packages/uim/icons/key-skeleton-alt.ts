import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimKeySkeletonAltIcon],svg[uim-key-skeleton-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 12a5 5 0 1 0 5 5a5 5 0 0 0-5-5m-1.415 7.412a1 1 0 1 1 0-2a1 1 0 0 1 0 2" opacity=".5"></svg:path><svg:path fill="currentColor" d="M21.708 6.534L20.293 5.12l1.413-1.413a1 1 0 1 0-1.414-1.414L9.753 12.831a5 5 0 0 1 1.415 1.414l4.883-4.883l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414l1.414-1.414l1.415 1.414a1 1 0 0 0 1.414-1.414"></svg:path>`,
})
export class UimKeySkeletonAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
