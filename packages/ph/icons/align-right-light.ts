import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAlignRightLightIcon],svg[ph-align-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 40v176a6 6 0 0 1-12 0V40a6 6 0 0 1 12 0m-32 24v40a14 14 0 0 1-14 14H80a14 14 0 0 1-14-14V64a14 14 0 0 1 14-14h96a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2H80a2 2 0 0 0-2 2v40a2 2 0 0 0 2 2h96a2 2 0 0 0 2-2Zm12 88v40a14 14 0 0 1-14 14H40a14 14 0 0 1-14-14v-40a14 14 0 0 1 14-14h136a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2H40a2 2 0 0 0-2 2v40a2 2 0 0 0 2 2h136a2 2 0 0 0 2-2Z"></svg:path>`,
})
export class PhAlignRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
