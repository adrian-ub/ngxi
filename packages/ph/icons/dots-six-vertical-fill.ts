import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phDotsSixVerticalFillIcon],svg[ph-dots-six-vertical-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 16H64a16 16 0 0 0-16 16v192a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V32a16 16 0 0 0-16-16m-92 184a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-60a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-60a12 12 0 1 1 12-12a12 12 0 0 1-12 12m56 120a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-60a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-60a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhDotsSixVerticalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
