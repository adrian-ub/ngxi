import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconAdjustHightOutlineIcon],svg[lsicon-adjust-hight-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M13 1.5H3m10 13H3M8 7V3m0 0l2 2M8 3L6 5m2 8V9m0 4l-2-2m2 2l2-2"></svg:path>`,
})
export class LsiconAdjustHightOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
