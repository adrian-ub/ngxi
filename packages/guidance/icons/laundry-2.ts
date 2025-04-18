import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceLaundry2Icon],svg[guidance-laundry-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M9 14.5h6M17 4H7m10 0a3 3 0 0 0 3-3V.5H7.5a3.5 3.5 0 1 0 0 7H20V7a3 3 0 0 0-3-3ZM3.5 23.5h17c0-4 .934-7.79 2.722-11.217l.278-.533v-.25H.5v.25l.278.533C2.566 15.71 3.5 19.5 3.5 23.5Z"></svg:path>`,
})
export class GuidanceLaundry2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
