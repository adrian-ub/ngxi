import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoControllerJumpToStartIcon],svg[entypo-controller-jump-to-start-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.959 4.571L7.756 9.52s-.279.201-.279.481s.279.479.279.479l7.203 4.951c.572.38 1.041.099 1.041-.626V5.196c0-.727-.469-1.008-1.041-.625M6 4H5c-.553 0-1 .048-1 .6v10.8c0 .552.447.6 1 .6h1c.553 0 1-.048 1-.6V4.6c0-.552-.447-.6-1-.6"></svg:path>`,
})
export class EntypoControllerJumpToStartIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
