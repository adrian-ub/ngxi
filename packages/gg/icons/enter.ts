import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggEnterIcon],svg[gg-enter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M20 5H8v4H6V3h16v18H6v-6h2v4h12z"></svg:path><svg:path d="m13.074 16.95l-1.414-1.414L14.196 13H2v-2h12.196L11.66 8.465l1.414-1.415l4.95 4.95z"></svg:path></svg:g>`,
})
export class GgEnterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
