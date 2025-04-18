import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsEditImageIcon],svg[flat-color-icons-edit-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#8CBCD6" d="M31 41H8c-2.2 0-4-1.8-4-4V11c0-2.2 1.8-4 4-4h32c2.2 0 4 1.8 4 4v17c0 7.2-5.8 13-13 13"></svg:path><svg:circle cx="35" cy="16" r="3" fill="#B3DDF5"></svg:circle><svg:path fill="#9AC9E3" d="M20 16L9 32h22z"></svg:path><svg:path fill="#B3DDF5" d="m31 22l-8 10h16z"></svg:path><svg:path fill="#E57373" d="m47.7 29.1l-2.8-2.8c-.4-.4-1.1-.4-1.6 0L42 27.6l4.4 4.4l1.3-1.3c.4-.4.4-1.1 0-1.6"></svg:path><svg:path fill="#FF9800" d="M27.467 42.167L39.77 29.865l4.384 4.384L31.85 46.55z"></svg:path><svg:path fill="#B0BEC5" d="m46.4 32.038l-2.192 2.192l-4.383-4.384l2.192-2.191z"></svg:path><svg:path fill="#FFC107" d="M27.5 42.2L26 48l5.8-1.5z"></svg:path><svg:path fill="#37474F" d="m26.7 45l-.7 3l3-.7z"></svg:path>`,
})
export class FlatColorIconsEditImageIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
