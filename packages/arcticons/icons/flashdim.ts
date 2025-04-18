import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFlashdimIcon],svg[arcticons-flashdim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.698 7.95v2.614m3.276-4.286v4.286M27.512 4.5v6.064m-10.798 3.242h14.573v3.771H16.714z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m26.951 43.5l-6.253-.052c-.655-.006-1.108-.634-1.101-1.098l.21-13.906c.012-.804-.236-1.571-.577-2.248l-2.5-4.967v-3.653h14.557v3.862l-2.726 4.549c-.386.643-.488 1.537-.488 2.509v13.592c0 .615-.291 1.419-1.121 1.412Zm-2.943-14.823v3.844"></svg:path>`,
})
export class ArcticonsFlashdimIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
