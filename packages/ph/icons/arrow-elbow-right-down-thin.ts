import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowRightDownThinIcon],svg[ph-arrow-elbow-right-down-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m226.83 162.83l-48 48a4 4 0 0 1-5.66 0l-48-48a4 4 0 1 1 5.66-5.66L172 198.34V68H32a4 4 0 0 1 0-8h144a4 4 0 0 1 4 4v134.34l41.17-41.17a4 4 0 0 1 5.66 5.66"></svg:path>`,
})
export class PhArrowElbowRightDownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
