import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPencilRemoveIcon],svg[mdi-pencil-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.7 7c.4-.4.4-1 0-1.4l-2.3-2.3c-.4-.4-1-.4-1.4 0l-1.8 1.8L19 8.9M3 17.2V21h3.8l11-11.1l-3.7-3.8zm.9-14.8L6 4.5l2.1-2.1l1.4 1.4l-2.1 2.1L9.5 8L8.1 9.5L6 7.4L3.9 9.5L2.5 8.1L4.6 6L2.5 3.8z"></svg:path>`,
})
export class MdiPencilRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
