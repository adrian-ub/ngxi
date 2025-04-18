import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiPencilIcon],svg[oi-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 0L5 1l2 2l1-1zM4 2L0 6v2h2l4-4z"></svg:path>`,
})
export class OiPencilIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
