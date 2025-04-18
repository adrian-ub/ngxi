import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconMoveDownOutlineIcon],svg[lsicon-move-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M7.979 2.043v11M11.5 9.772l-3.521 3.521l-3.522-3.521M2 2.5h12m-12 4h4.5m3 0H14"></svg:path>`,
})
export class LsiconMoveDownOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
