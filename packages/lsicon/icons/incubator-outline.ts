import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconIncubatorOutlineIcon],svg[lsicon-incubator-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M14.5 5v8.5h-13V5m13 0h-13m13 0L12 2.5H4L1.5 5m9.078 2.771A2 2 0 1 0 10.732 10M4.5 7.25h.005v.005H4.5zm.25 0a.25.25 0 1 1-.5 0a.25.25 0 0 1 .5 0Z"></svg:path>`,
})
export class LsiconIncubatorOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
