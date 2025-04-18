import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phRecordFillIcon],svg[ph-record-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m72-88a72 72 0 1 1-72-72a72.08 72.08 0 0 1 72 72"></svg:path>`,
})
export class PhRecordFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
