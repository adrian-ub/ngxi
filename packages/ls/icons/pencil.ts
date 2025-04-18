import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsPencilIcon],svg[ls-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M587 0L478 98s36 22 69 53c32 31 55 66 55 66l93-111s-1-20-45-63C605 0 587 0 587 0M232 549l-5 48l346-360s-23-32-51-59c-29-28-62-50-62-50L114 488l54-3l6 58zM0 702l86-176l48-4l4 55l58 8l-6 44l-174 88z"></svg:path>`,
})
export class LsPencilIcon {
  readonly viewBox = input("0 0 695 717")
  readonly width = input("0.97em")
  readonly height = input("1em")
}
