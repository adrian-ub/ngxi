import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCheckmarkOutlineWarningIcon],svg[carbon-checkmark-outline-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 24a10 10 0 1 1 10-10h2a12 12 0 1 0-12 12Z"></svg:path><svg:path fill="currentColor" d="M12 15.59L9.41 13L8 14.41l4 4l7-7L17.59 10zM27.38 28h-6.762L24 21.236zM24 18a1 1 0 0 0-.895.553l-5 10A1 1 0 0 0 19 30h10a1 1 0 0 0 .921-1.39l-5.026-10.057A1 1 0 0 0 24 18"></svg:path>`,
})
export class CarbonCheckmarkOutlineWarningIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
