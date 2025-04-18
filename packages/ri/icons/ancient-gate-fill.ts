import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riAncientGateFillIcon],svg[ri-ancient-gate-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.964 3h10.072a3.5 3.5 0 0 0 4.445 2.86A3.5 3.5 0 0 1 18 9H6a3.5 3.5 0 0 1-3.481-3.14A3.5 3.5 0 0 0 6.964 3m16.015 8.111a3 3 0 0 1-4.077-1.11H5.098a3 3 0 0 1-4.078 1.11A3.5 3.5 0 0 0 3 14.663V21h6v-2a3 3 0 0 1 6 0v2h6v-6.336a3.5 3.5 0 0 0 1.979-3.553"></svg:path>`,
})
export class RiAncientGateFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
