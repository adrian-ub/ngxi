import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTreasureChestFillIcon],svg[ph-treasure-chest-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 124v68a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-68a4 4 0 0 1 4-4h36v64a8 8 0 0 0 8.53 8a8.17 8.17 0 0 0 7.47-8.27V120h40v20a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4v-20h40v64a8 8 0 0 0 8.53 8a8.17 8.17 0 0 0 7.47-8.25V120h36a4 4 0 0 1 4 4m-56-84H72a56 56 0 0 0-56 56v4a4 4 0 0 0 4 4h36V64.27A8.17 8.17 0 0 1 63.47 56A8 8 0 0 1 72 64v40h40V92a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v12h40V64.27a8.17 8.17 0 0 1 7.47-8.27a8 8 0 0 1 8.53 8v40h36a4 4 0 0 0 4-4v-4a56 56 0 0 0-56-56"></svg:path>`,
})
export class PhTreasureChestFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
