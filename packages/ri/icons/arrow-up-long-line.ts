import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riArrowUpLongLineIcon],svg[ri-arrow-up-long-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 22h-2V5.828l-3.95 3.95l-1.414-1.414L12 2l6.364 6.364l-1.414 1.414L13 5.828z"></svg:path>`,
})
export class RiArrowUpLongLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
