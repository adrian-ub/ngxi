import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciMoveVerticalIcon],svg[ci-move-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21V3m0 18l3-3m-3 3l-3-3m3-15L9 6m3-3l3 3"></svg:path>`,
})
export class CiMoveVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
