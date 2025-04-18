import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTaskErrorFilledIcon],svg[tdesign-task-error-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 1H8v4h8z"></svg:path><svg:path fill="currentColor" d="M6 3H3v20h10.876A6.5 6.5 0 0 1 21 12.814V3h-3v4H6z"></svg:path><svg:path fill="currentColor" d="m23.243 21.828l-1.414 1.415L19 20.414l-2.828 2.829l-1.414-1.415L17.586 19l-2.828-2.828l1.414-1.415L19 17.586l2.829-2.829l1.414 1.415L20.415 19z"></svg:path>`,
})
export class TdesignTaskErrorFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
