import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsPictureIcon],svg[flat-color-icons-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#F57C00" d="M40 41H8c-2.2 0-4-1.8-4-4V11c0-2.2 1.8-4 4-4h32c2.2 0 4 1.8 4 4v26c0 2.2-1.8 4-4 4"></svg:path><svg:circle cx="35" cy="16" r="3" fill="#FFF9C4"></svg:circle><svg:path fill="#942A09" d="M20 16L9 32h22z"></svg:path><svg:path fill="#BF360C" d="m31 22l-8 10h16z"></svg:path>`,
})
export class FlatColorIconsPictureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
