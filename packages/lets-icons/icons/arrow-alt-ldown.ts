import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowAltLdownIcon],svg[lets-icons-arrow-alt-ldown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 18l-.707.707l.707.707l.707-.707zm1-12a1 1 0 1 0-2 0zm-5.707 8.707l4 4l1.414-1.414l-4-4zm5.414 4l4-4l-1.414-1.414l-4 4zM13 18V6h-2v12z"></svg:path>`,
})
export class LetsIconsArrowAltLdownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
