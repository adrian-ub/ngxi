import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxCardIcon],svg[bx-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.999 17c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2h-12c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2zm-12-12h12l.002 10H5.999zm-2 14h16v2h-16z"></svg:path>`,
})
export class BxCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
