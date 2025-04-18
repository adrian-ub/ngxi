import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsBlanketIcon],svg[bxs-blanket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H7C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h12c1.654 0 3-1.346 3-3s-1.346-3-3-3H6v2h13a1 1 0 0 1 0 2H7c-1.654 0-3-1.346-3-3s1.346-3 3-3h13c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2M4 13h.003L4 13.002z"></svg:path>`,
})
export class BxsBlanketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
