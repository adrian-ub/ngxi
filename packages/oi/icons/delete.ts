import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiDeleteIcon],svg[oi-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 1L0 4l2 3h6V1zm1.5.78L5 3.28l1.5-1.5l.72.72L5.72 4l1.5 1.5l-.72.72L5 4.72l-1.5 1.5l-.72-.72L4.28 4l-1.5-1.5z"></svg:path>`,
})
export class OiDeleteIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
