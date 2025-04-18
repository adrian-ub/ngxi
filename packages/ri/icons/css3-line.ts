import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCss3LineIcon],svg[ri-css3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.8 14h2.04l-.545 2.724l5.744 2.155l7.228-2.41L18.36 11H3.4l.4-2h14.96l.8-4H4.6L5 3h17l-3 15l-9 3l-8-3z"></svg:path>`,
})
export class RiCss3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
