import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowAltLdownAltIcon],svg[lets-icons-arrow-alt-ldown-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 18l-.354.354l.354.353l.354-.353zm.5-12a.5.5 0 0 0-1 0zm-4.854 8.354l4 4l.708-.708l-4-4zm4.708 4l4-4l-.708-.708l-4 4zM12.5 18V6h-1v12z"></svg:path>`,
})
export class LetsIconsArrowAltLdownAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
