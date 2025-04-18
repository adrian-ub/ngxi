import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phOfficeChairFillIcon],svg[ph-office-chair-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 128a8 8 0 0 1-8 8h-16.67A48.08 48.08 0 0 1 176 176h-40v24h24a32 32 0 0 1 32 32a8 8 0 0 1-16 0a16 16 0 0 0-16-16h-24v16a8 8 0 0 1-16 0v-16H96a16 16 0 0 0-16 16a8 8 0 0 1-16 0a32 32 0 0 1 32-32h24v-24H80a48.08 48.08 0 0 1-47.33-40H16a8 8 0 0 1 0-16h24a8 8 0 0 1 8 8a32 32 0 0 0 32 32h96a32 32 0 0 0 32-32a8 8 0 0 1 8-8h24a8 8 0 0 1 8 8M80 144h96a16 16 0 0 0 15.84-18.26l-13.72-96A16.08 16.08 0 0 0 162.28 16H93.72a16.08 16.08 0 0 0-15.84 13.74l-13.72 96A16 16 0 0 0 80 144"></svg:path>`,
})
export class PhOfficeChairFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
