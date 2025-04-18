import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTrolleyBoldIcon],svg[ph-trolley-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 224a20 20 0 1 1-20-20a20 20 0 0 1 20 20m124-20a20 20 0 1 0 20 20a20 20 0 0 0-20-20m24-36H60V75.31a19.86 19.86 0 0 0-5.86-14.14L32.49 39.51a12 12 0 0 0-17 17L36 77v91h-4a12 12 0 0 0 0 24h208a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhTrolleyBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
