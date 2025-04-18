import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAlignCenterVerticalFillIcon],svg[ph-align-center-vertical-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 128a8 8 0 0 1-8 8h-16v48a16 16 0 0 1-16 16h-40a16 16 0 0 1-16-16v-48h-16v72a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16v-72H32a8 8 0 0 1 0-16h16V48a16 16 0 0 1 16-16h40a16 16 0 0 1 16 16v72h16V72a16 16 0 0 1 16-16h40a16 16 0 0 1 16 16v48h16a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhAlignCenterVerticalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
