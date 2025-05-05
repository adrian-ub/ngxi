import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconHourglass8Icon],svg[picon-hourglass8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4L1 5l2 2m1 0L3 8L0 5l1-1l2.5-.5L4 1l1-1l3 3l-1 1l-2.5.5"></svg:path>`,
})
export class PiconHourglass8Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
