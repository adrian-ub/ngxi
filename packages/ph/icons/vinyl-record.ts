import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phVinylRecordIcon],svg[ph-vinyl-record-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m0-144a56.06 56.06 0 0 0-56 56a8 8 0 0 1-16 0a72.08 72.08 0 0 1 72-72a8 8 0 0 1 0 16m72 56a72.08 72.08 0 0 1-72 72a8 8 0 0 1 0-16a56.06 56.06 0 0 0 56-56a8 8 0 0 1 16 0m-40 0a32 32 0 1 0-32 32a32 32 0 0 0 32-32m-48 0a16 16 0 1 1 16 16a16 16 0 0 1-16-16"></svg:path>`,
})
export class PhVinylRecordIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
