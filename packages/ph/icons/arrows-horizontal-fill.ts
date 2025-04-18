import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowsHorizontalFillIcon],svg[ph-arrows-horizontal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m237.66 133.66l-32 32A8 8 0 0 1 192 160v-24H64v24a8 8 0 0 1-13.66 5.66l-32-32a8 8 0 0 1 0-11.32l32-32A8 8 0 0 1 64 96v24h128V96a8 8 0 0 1 13.66-5.66l32 32a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhArrowsHorizontalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
