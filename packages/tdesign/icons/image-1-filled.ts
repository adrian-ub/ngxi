import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignImage1FilledIcon],svg[tdesign-image-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.001 6a4 4 0 1 1 8 0a4 4 0 0 1-8 0M8.997 8.144l4.493 6.988l2.436-3.899L24.001 22H.18z"></svg:path>`,
})
export class TdesignImage1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
