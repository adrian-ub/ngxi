import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phVinylRecordBoldIcon],svg[ph-vinyl-record-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m0-128a44.05 44.05 0 0 0-44 44a12 12 0 0 1-24 0a68.07 68.07 0 0 1 68-68a12 12 0 0 1 0 24m68 44a68.07 68.07 0 0 1-68 68a12 12 0 0 1 0-24a44.05 44.05 0 0 0 44-44a12 12 0 0 1 24 0m-68 28a28 28 0 1 1 28-28a28 28 0 0 1-28 28"></svg:path>`,
})
export class PhVinylRecordBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
