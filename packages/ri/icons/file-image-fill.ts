import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFileImageFillIcon],svg[ri-file-image-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 7l-5-5H3.993A.993.993 0 0 0 3 2.992v18.016a1 1 0 0 0 .993.992h16.014a.993.993 0 0 0 .993-.992zM11 9.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m6.5 7.5H8l5.5-7z"></svg:path>`,
})
export class RiFileImageFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
