import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSuitcaseRollingBoldIcon],svg[ph-suitcase-rolling-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M116 96v80a12 12 0 0 1-24 0V96a12 12 0 0 1 24 0m24 0v80a12 12 0 0 0 24 0V96a12 12 0 0 0-24 0m72-32v144a20 20 0 0 1-20 20h-12v12a12 12 0 0 1-24 0v-12h-56v12a12 12 0 0 1-24 0v-12H64a20 20 0 0 1-20-20V64a20 20 0 0 1 20-20h20V28a28 28 0 0 1 28-28h32a28 28 0 0 1 28 28v16h20a20 20 0 0 1 20 20M108 44h40V28a4 4 0 0 0-4-4h-32a4 4 0 0 0-4 4Zm80 24H68v136h120Z"></svg:path>`,
})
export class PhSuitcaseRollingBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
