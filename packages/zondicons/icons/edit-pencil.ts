import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsEditPencilIcon],svg[zondicons-edit-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.3 3.7l4 4L4 20H0v-4zm1.4-1.4L16 0l4 4l-2.3 2.3z"></svg:path>`,
})
export class ZondiconsEditPencilIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
