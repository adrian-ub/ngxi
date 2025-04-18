import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFileCheckLineIcon],svg[ri-file-check-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20v2H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.447 2 3.999 2H16l5 5v7h-2V8h-4V4H5v16zm2.465-.535L18 23l4.95-4.95l-1.414-1.414L18 20.172l-2.12-2.122z"></svg:path>`,
})
export class RiFileCheckLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
