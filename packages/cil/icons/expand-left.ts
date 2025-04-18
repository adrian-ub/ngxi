import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilExpandLeftIcon],svg[cil-expand-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 16h32v480h-32zm-320 0H16v480h128Zm-32 448H48V48h64ZM416 96h-37.86L208.776 255.923L376.079 416H416Zm-32 283.291L255.224 256.077L384 134.478Z"></svg:path>`,
})
export class CilExpandLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
