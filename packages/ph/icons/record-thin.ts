import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phRecordThinIcon],svg[ph-record-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m0-160a68 68 0 1 0 68 68a68.07 68.07 0 0 0-68-68m0 128a60 60 0 1 1 60-60a60.07 60.07 0 0 1-60 60"></svg:path>`,
})
export class PhRecordThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
