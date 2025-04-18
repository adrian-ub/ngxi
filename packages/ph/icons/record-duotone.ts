import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phRecordDuotoneIcon],svg[ph-record-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 128a64 64 0 1 1-64-64a64 64 0 0 1 64 64" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m0-160a72 72 0 1 0 72 72a72.08 72.08 0 0 0-72-72m0 128a56 56 0 1 1 56-56a56.06 56.06 0 0 1-56 56"></svg:path></svg:g>`,
})
export class PhRecordDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
