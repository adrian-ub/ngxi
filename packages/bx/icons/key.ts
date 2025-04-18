import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxKeyIcon],svg[bx-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17a5.01 5.01 0 0 0 4.898-4H14v2h2v-2h2v3h2v-3h1v-2h-9.102A5.01 5.01 0 0 0 7 7c-2.757 0-5 2.243-5 5s2.243 5 5 5m0-8c1.654 0 3 1.346 3 3s-1.346 3-3 3s-3-1.346-3-3s1.346-3 3-3"></svg:path>`,
})
export class BxKeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
