import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconMoveUpOutlineIcon],svg[lsicon-move-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M7.979 13.957v-11M11.5 6.228L7.979 2.707L4.457 6.228M2 13.5h12m-12-4h4.5m3 0H14"></svg:path>`,
})
export class LsiconMoveUpOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
