import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowBendRightDownThinIcon],svg[ph-arrow-bend-right-down-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m202.83 178.83l-48 48a4 4 0 0 1-5.66 0l-48-48a4 4 0 0 1 5.66-5.66L148 214.34V128a92.1 92.1 0 0 0-92-92a4 4 0 0 1 0-8a100.11 100.11 0 0 1 100 100v86.34l41.17-41.17a4 4 0 0 1 5.66 5.66"></svg:path>`,
})
export class PhArrowBendRightDownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
