import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAlignCenterVerticalSimpleFillIcon],svg[ph-align-center-vertical-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 128a8 8 0 0 1-8 8h-32v72a16 16 0 0 1-16 16H96a16 16 0 0 1-16-16v-72H48a8 8 0 0 1 0-16h32V48a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v72h32a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhAlignCenterVerticalSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
