import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowAltLtopAltIcon],svg[lets-icons-arrow-alt-ltop-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 6l.354-.354L12 5.293l-.354.353zm-.5 12a.5.5 0 0 0 1 0zm4.854-8.354l-4-4l-.708.708l4 4zm-4.708-4l-4 4l.708.708l4-4zM11.5 6v12h1V6z"></svg:path>`,
})
export class LetsIconsArrowAltLtopAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
