import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riArrowRightLongLineIcon],svg[ri-arrow-right-long-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 13v-2h16.172l-3.95-3.95l1.414-1.414L22 12l-6.364 6.364l-1.414-1.414l3.95-3.95z"></svg:path>`,
})
export class RiArrowRightLongLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
