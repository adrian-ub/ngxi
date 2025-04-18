import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riArrowLeftLongLineIcon],svg[ri-arrow-left-long-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13v-2H5.828l3.95-3.95l-1.414-1.414L2 12l6.364 6.364l1.414-1.414L5.828 13z"></svg:path>`,
})
export class RiArrowLeftLongLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
