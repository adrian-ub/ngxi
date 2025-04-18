import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAnymemoIcon],svg[arcticons-anymemo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.1 26.3L24 7.1L12.9 26.3"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.3 26.3v-3.5l1.6-2.4h2.2l1.6 2.4v3.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m30.8 36.4l2.6 4.5h10.1l-8.4-14.6h-8.4l-1.6 2.5h-2.2l-1.6-2.5h-8.4L4.5 40.9h10.1l2.6-4.5l2.5 4.5h8.6z"></svg:path>`,
})
export class ArcticonsAnymemoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
