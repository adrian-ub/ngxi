import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconTakeoutIcon],svg[picon-takeout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8L1 4L0 1V0l2 2l1-2h2l1 2l2-2v1L7 4L6 8M2 2L1 3.5h6L6 2"></svg:path>`,
})
export class PiconTakeoutIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
