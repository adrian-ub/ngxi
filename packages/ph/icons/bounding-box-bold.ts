import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBoundingBoxBoldIcon],svg[ph-bounding-box-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 100a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20h-32a20 20 0 0 0-20 20v4h-56v-4a20 20 0 0 0-20-20H48a20 20 0 0 0-20 20v32a20 20 0 0 0 20 20h4v56h-4a20 20 0 0 0-20 20v32a20 20 0 0 0 20 20h32a20 20 0 0 0 20-20v-4h56v4a20 20 0 0 0 20 20h32a20 20 0 0 0 20-20v-32a20 20 0 0 0-20-20h-4v-56Zm-28-48h24v24h-24ZM52 52h24v24H52Zm24 152H52v-24h24Zm128 0h-24v-24h24Zm-24-48h-4a20 20 0 0 0-20 20v4h-56v-4a20 20 0 0 0-20-20h-4v-56h4a20 20 0 0 0 20-20v-4h56v4a20 20 0 0 0 20 20h4Z"></svg:path>`,
})
export class PhBoundingBoxBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
