import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAlignCenterVerticalThinIcon],svg[ph-align-center-vertical-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 124h-20V72a12 12 0 0 0-12-12h-40a12 12 0 0 0-12 12v52h-24V48a12 12 0 0 0-12-12H64a12 12 0 0 0-12 12v76H32a4 4 0 0 0 0 8h20v76a12 12 0 0 0 12 12h40a12 12 0 0 0 12-12v-76h24v52a12 12 0 0 0 12 12h40a12 12 0 0 0 12-12v-52h20a4 4 0 0 0 0-8m-116 84a4 4 0 0 1-4 4H64a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4Zm88-24a4 4 0 0 1-4 4h-40a4 4 0 0 1-4-4V72a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhAlignCenterVerticalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
