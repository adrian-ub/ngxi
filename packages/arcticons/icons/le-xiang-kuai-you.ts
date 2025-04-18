import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLeXiangKuaiYouIcon],svg[arcticons-le-xiang-kuai-you-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M27.798 18.169h6.286c4.543 0 8.2 3.657 8.2 8.2v7.93a8.18 8.18 0 0 1-8.2 8.201H13.916a8.183 8.183 0 0 1-8.2-8.2v-7.931c0-4.543 3.657-8.2 8.2-8.2h0l8.518-.001l1.19-5.649l-6.585.573L23.85 5.5"></svg:path><svg:path d="m32.628 27.28l-3.363 2.632l2.636 3.385m-14.064-7.098v8.18m4.065-4.09h-8.13"></svg:path></svg:g>`,
})
export class ArcticonsLeXiangKuaiYouIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
