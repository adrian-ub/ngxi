import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFileCheckFillIcon],svg[ri-file-check-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 7l-5-5H3.999A.995.995 0 0 0 3 2.992v18.016a1 1 0 0 0 .993.992h8.348A6 6 0 0 1 21 14.803zm-6.535 12.465L18 23l4.95-4.95l-1.414-1.414L18 20.172l-2.12-2.122z"></svg:path>`,
})
export class RiFileCheckFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
