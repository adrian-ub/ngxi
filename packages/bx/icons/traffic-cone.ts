import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxTrafficConeIcon],svg[bx-traffic-cone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.943 2.667A1 1 0 0 0 13 2h-2a1 1 0 0 0-.943.667L4.292 19H2v2h20v-2h-2.292zM15.47 13H8.53l1.06-3h4.82zm-3.763-9h.586l1.412 4h-3.41zM7.825 15h8.35l1.412 4H6.413z"></svg:path>`,
})
export class BxTrafficConeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
