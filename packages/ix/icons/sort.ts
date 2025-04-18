import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixSortIcon],svg[ix-sort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m219.52 295.985l30.166 30.167L149.27 426.666L48.853 326.152l30.167-30.167l48.916 48.917V106.666h42.667v238.236zM362.603 85.333L262.185 185.855l30.167 30.167l48.918-48.918v238.229h42.666V167.106l48.916 48.916l30.166-30.167z"></svg:path>`,
})
export class IxSortIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
