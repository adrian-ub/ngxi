import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFileImageLineIcon],svg[ri-file-image-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 8V4H5v16h14V8zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008zM11 9.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m6.5 7.5l-4-7L8 17z"></svg:path>`,
})
export class RiFileImageLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
