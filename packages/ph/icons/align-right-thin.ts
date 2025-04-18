import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAlignRightThinIcon],svg[ph-align-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 40v176a4 4 0 0 1-8 0V40a4 4 0 0 1 8 0m-32 24v40a12 12 0 0 1-12 12H80a12 12 0 0 1-12-12V64a12 12 0 0 1 12-12h96a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H80a4 4 0 0 0-4 4v40a4 4 0 0 0 4 4h96a4 4 0 0 0 4-4Zm8 88v40a12 12 0 0 1-12 12H40a12 12 0 0 1-12-12v-40a12 12 0 0 1 12-12h136a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v40a4 4 0 0 0 4 4h136a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhAlignRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
