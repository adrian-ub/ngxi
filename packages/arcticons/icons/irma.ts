import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIrmaIcon],svg[arcticons-irma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.929 18.915v8.654m10.535-.01v-8.644l4.328 8.654l4.327-8.641v8.641m-16.789 0v-8.654h2.833a2.907 2.907 0 0 1 0 5.813H18.33m2.833 0l2.833 2.839m13.294-.024l3.149-8.628m1.535 5.759h-3.543"></svg:path><svg:rect width="34.374" height="23.148" x="6.813" y="12.426" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2" transform="rotate(-20 24 24)"></svg:rect>`,
})
export class ArcticonsIrmaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
