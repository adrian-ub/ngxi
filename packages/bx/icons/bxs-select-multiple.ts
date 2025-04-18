import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsSelectMultipleIcon],svg[bx-bxs-select-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M20 2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-6.933 12.481l-3.274-3.274l1.414-1.414l1.726 1.726l4.299-5.159l1.537 1.281l-5.702 6.84z" fill="currentColor"></svg:path><svg:path d="M4 22h11v-2H4V8H2v12c0 1.103.897 2 2 2z" fill="currentColor"></svg:path>`,
})
export class BxBxsSelectMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
