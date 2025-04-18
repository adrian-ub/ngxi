import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconTimingShelfDownOutlineIcon],svg[lsicon-timing-shelf-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4 8h4V4m3.5 5.5V13m0 0l1.5-1.5M11.5 13L10 11.5m-2.078 3A6.5 6.5 0 1 1 14.5 8m0 3.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"></svg:path>`,
})
export class LsiconTimingShelfDownOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
