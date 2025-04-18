import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phScreencastBoldIcon],svg[ph-screencast-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 60v136a20 20 0 0 1-20 20h-40a12 12 0 0 1 0-24h36V64H48v4a12 12 0 0 1-24 0v-8a20 20 0 0 1 20-20h168a20 20 0 0 1 20 20M36 176a12 12 0 0 0 0 24a4 4 0 0 1 4 4a12 12 0 0 0 24 0a28 28 0 0 0-28-28m0-40a12 12 0 0 0 0 24a44.05 44.05 0 0 1 44 44a12 12 0 0 0 24 0a68.07 68.07 0 0 0-68-68m0-40a12 12 0 0 0 0 24a84.09 84.09 0 0 1 84 84a12 12 0 0 0 24 0A108.12 108.12 0 0 0 36 96"></svg:path>`,
})
export class PhScreencastBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
