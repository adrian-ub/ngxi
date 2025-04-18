import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLinesUpFillIcon],svg[ph-arrow-fat-lines-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 216a8 8 0 0 1-8 8H80a8 8 0 0 1 0-16h96a8 8 0 0 1 8 8m45.66-101.66l-96-96a8 8 0 0 0-11.32 0l-96 96A8 8 0 0 0 32 128h40v24a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8v-24h40a8 8 0 0 0 5.66-13.66M176 176H80a8 8 0 0 0 0 16h96a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhArrowFatLinesUpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
