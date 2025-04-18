import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phVinylRecordFillIcon],svg[ph-vinyl-record-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M72 128a8 8 0 0 1-16 0a72.08 72.08 0 0 1 72-72a8 8 0 0 1 0 16a56.06 56.06 0 0 0-56 56m32 0a24 24 0 1 1 24 24a24 24 0 0 1-24-24m24 72a8 8 0 0 1 0-16a56.06 56.06 0 0 0 56-56a8 8 0 0 1 16 0a72.08 72.08 0 0 1-72 72"></svg:path>`,
})
export class PhVinylRecordFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
