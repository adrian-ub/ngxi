import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhCommentloveIcon],svg[whh-commentlove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 896q-66 0-134-16q-103 121-201 142l-17 2q26-57 30-124.5T177 786Q94 723 47 635T0 448q0-91 40.5-174t109-143T313 35.5T512 0t199 35.5T874.5 131t109 143t40.5 174t-40.5 174t-109 143T711 860.5T512 896m128-640q-53 0-90.5 37.5T512 384q0-53-37.5-90.5T384 256t-90.5 37.5T256 384v1q0 53 26 114t83 119l147 86l147-86q59-61 84-115.5T768 385v-1q0-53-37.5-90.5T640 256M512 384"></svg:path>`,
})
export class WhhCommentloveIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
