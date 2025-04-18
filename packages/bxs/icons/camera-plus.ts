import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsCameraPlusIcon],svg[bxs-camera-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 5h-2.586l-2.707-2.707A1 1 0 0 0 14 2h-4a1 1 0 0 0-.707.293L6.586 5H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2m-8 12c-2.71 0-5-2.29-5-5s2.29-5 5-5s5 2.289 5 5s-2.29 5-5 5"></svg:path><svg:path fill="currentColor" d="M13 9h-2v2H9v2h2v2h2v-2h2v-2h-2z"></svg:path>`,
})
export class BxsCameraPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
