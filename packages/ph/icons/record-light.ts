import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phRecordLightIcon],svg[ph-record-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m0-160a70 70 0 1 0 70 70a70.08 70.08 0 0 0-70-70m0 128a58 58 0 1 1 58-58a58.07 58.07 0 0 1-58 58"></svg:path>`,
})
export class PhRecordLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
