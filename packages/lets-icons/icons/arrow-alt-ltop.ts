import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowAltLtopIcon],svg[lets-icons-arrow-alt-ltop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 6l.707-.707L12 4.586l-.707.707zm-1 12a1 1 0 1 0 2 0zm5.707-8.707l-4-4l-1.414 1.414l4 4zm-5.414-4l-4 4l1.414 1.414l4-4zM11 6v12h2V6z"></svg:path>`,
})
export class LetsIconsArrowAltLtopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
