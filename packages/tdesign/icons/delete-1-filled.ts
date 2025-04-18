import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignDelete1FilledIcon],svg[tdesign-delete-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 3h9V1h-9zM22 6V4H2v2h2.029l.5 17h14.942l.5-17zm-5.757 4.672L13.415 13.5l2.828 2.828l-1.414 1.415L12 14.914l-2.829 2.829l-1.414-1.415l2.828-2.828l-2.828-2.828l1.414-1.415L12 12.086l2.828-2.829z"></svg:path>`,
})
export class TdesignDelete1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
