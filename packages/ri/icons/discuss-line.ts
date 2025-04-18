import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riDiscussLineIcon],svg[ri-discuss-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 22.5L11.2 19H6a1 1 0 0 1-1-1V7.103a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1V18a1 1 0 0 1-1 1h-5.2zm1.839-5.5H21V8.103H7V17h5.161L14 19.298zM2 2h17v2H3v11H1V3a1 1 0 0 1 1-1"></svg:path>`,
})
export class RiDiscussLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
