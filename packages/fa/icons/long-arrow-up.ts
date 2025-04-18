import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faLongArrowUpIcon],svg[fa-long-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M765 429q-9 19-29 19H512v1248q0 14-9 23t-23 9H288q-14 0-23-9t-9-23V448H32q-21 0-29-19t5-35L358 10q10-10 23-10q14 0 24 10l355 384q13 16 5 35"></svg:path>`,
})
export class FaLongArrowUpIcon {
  readonly viewBox = input("0 0 768 1728")
  readonly width = input("0.45em")
  readonly height = input("1em")
}
