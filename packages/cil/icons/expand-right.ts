import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilExpandRightIcon],svg[cil-expand-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M40 19h32v480H40zm352 480h128V19H392Zm32-448h64v416h-64ZM120 419h37.86l169.364-159.923L159.921 99H120Zm32-283.291l128.776 123.215L152 380.522Z"></svg:path>`,
})
export class CilExpandRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
