import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phVinylRecordLightIcon],svg[ph-vinyl-record-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m0-148a58.07 58.07 0 0 0-58 58a6 6 0 0 1-12 0a70.08 70.08 0 0 1 70-70a6 6 0 0 1 0 12m70 58a70.08 70.08 0 0 1-70 70a6 6 0 0 1 0-12a58.07 58.07 0 0 0 58-58a6 6 0 0 1 12 0m-40 0a30 30 0 1 0-30 30a30 30 0 0 0 30-30m-48 0a18 18 0 1 1 18 18a18 18 0 0 1-18-18"></svg:path>`,
})
export class PhVinylRecordLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
