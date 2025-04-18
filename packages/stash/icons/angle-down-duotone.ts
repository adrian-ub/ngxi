import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashAngleDownDuotoneIcon],svg[stash-angle-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.964 10.164a.9.9 0 0 1 1.273 0L12 11.927l1.764-1.763a.9.9 0 0 1 1.273 1.272l-2.4 2.4a.9.9 0 0 1-1.273 0l-2.4-2.4a.9.9 0 0 1 0-1.272"></svg:path>`,
})
export class StashAngleDownDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
