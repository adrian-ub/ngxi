import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundSwipeLeftAltIcon],svg[ic-round-swipe-left-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.1 13a5 5 0 1 0 0-2H5.83l.88-.88A.996.996 0 1 0 5.3 8.71L2.71 11.3a.996.996 0 0 0 0 1.41L5.3 15.3a.996.996 0 1 0 1.41-1.41L5.83 13z"></svg:path>`,
})
export class IcRoundSwipeLeftAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
