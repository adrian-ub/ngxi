import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSignDirectionMinusIcon],svg[mdi-sign-direction-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.5 9.5L18 12h-5v10H9a2 2 0 0 1 2-2v-8H3.5L6 9.5L3.5 7H11V3l1-1l1 1v4h5m5 11h-8v2h8Z"></svg:path>`,
})
export class MdiSignDirectionMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
