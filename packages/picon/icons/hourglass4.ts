import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconHourglass4Icon],svg[picon-hourglass4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5h2L4 4m1-1l1-1V1H2v1l1 1M1 8V6l2-2l-2-2V0h6v2L5 4l2 2v2"></svg:path>`,
})
export class PiconHourglass4Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
