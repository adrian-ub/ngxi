import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCarrotIcon],svg[picon-carrot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2q-9 11 2 2M5 3h3L6 2L5 0M1.5 5.5L2 7L1 6m3-1L3 4l2 1"></svg:path>`,
})
export class PiconCarrotIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
