import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phRecordBoldIcon],svg[ph-record-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m0-148a64 64 0 1 0 64 64a64.07 64.07 0 0 0-64-64m0 104a40 40 0 1 1 40-40a40 40 0 0 1-40 40"></svg:path>`,
})
export class PhRecordBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
