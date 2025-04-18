import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciMoveHorizontalIcon],svg[ci-move-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12h18M3 12l3 3m-3-3l3-3m15 3l-3-3m3 3l-3 3"></svg:path>`,
})
export class CiMoveHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
