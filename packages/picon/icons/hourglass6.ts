import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconHourglass6Icon],svg[picon-hourglass6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4L3 1L1 3m0 1L0 3l3-3l1 1l.5 2.5L7 4l1 1l-3 3l-1-1l-.5-2.5"></svg:path>`,
})
export class PiconHourglass6Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
