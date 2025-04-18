import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsZhihuIcon],svg[arcticons-zhihu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.097 11.603H23.89M11.357 6.568c-.3 4.931-2.237 7.266-5.857 9.36m11.273-4.325c-.356 10.363 2.206 20.992-11.054 29.83M16.634 30.21l6.764 9.362M6.485 23.973h18.938m3.394-13.847v26.49h2.517v4.27l5.419-4.27H42.5v-26.49Zm8.648 5.089v11.166"></svg:path>`,
})
export class ArcticonsZhihuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
