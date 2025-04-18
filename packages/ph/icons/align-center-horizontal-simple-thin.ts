import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAlignCenterHorizontalSimpleThinIcon],svg[ph-align-center-horizontal-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 84h-76V48a4 4 0 0 0-8 0v36H48a12 12 0 0 0-12 12v64a12 12 0 0 0 12 12h76v36a4 4 0 0 0 8 0v-36h76a12 12 0 0 0 12-12V96a12 12 0 0 0-12-12m4 76a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V96a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhAlignCenterHorizontalSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
