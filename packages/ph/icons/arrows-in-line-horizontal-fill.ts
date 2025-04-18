import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowsInLineHorizontalFillIcon],svg[ph-arrows-in-line-horizontal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M101.66 122.34a8 8 0 0 1 0 11.32l-32 32A8 8 0 0 1 56 160v-24H16a8 8 0 0 1 0-16h40V96a8 8 0 0 1 13.66-5.66ZM240 120h-40V96a8 8 0 0 0-13.66-5.66l-32 32a8 8 0 0 0 0 11.32l32 32A8 8 0 0 0 200 160v-24h40a8 8 0 0 0 0-16M128 32a8 8 0 0 0-8 8v176a8 8 0 0 0 16 0V40a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhArrowsInLineHorizontalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
