import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFadersBoldIcon],svg[ph-faders-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 124v92a12 12 0 0 1-24 0v-92a12 12 0 0 1 24 0m60 68a12 12 0 0 0-12 12v12a12 12 0 0 0 24 0v-12a12 12 0 0 0-12-12m24-40h-12V40a12 12 0 0 0-24 0v112h-12a12 12 0 0 0 0 24h48a12 12 0 0 0 0-24m-168 8a12 12 0 0 0-12 12v44a12 12 0 0 0 24 0v-44a12 12 0 0 0-12-12m24-40H68V40a12 12 0 0 0-24 0v80H32a12 12 0 0 0 0 24h48a12 12 0 0 0 0-24m72-48h-12V40a12 12 0 0 0-24 0v32h-12a12 12 0 0 0 0 24h48a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhFadersBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
