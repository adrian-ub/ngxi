import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsMessageSquareEditIcon],svg[bx-bxs-message-square-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zM8.999 17H7v-1.999l5.53-5.522l1.999 1.999L8.999 17zm6.473-6.465l-1.999-1.999l1.524-1.523l1.999 1.999l-1.524 1.523z" fill="currentColor"></svg:path>`,
})
export class BxBxsMessageSquareEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
