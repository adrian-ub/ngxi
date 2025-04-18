import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconMoveOutlineIcon],svg[lsicon-move-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2 8h12M2 8l1.875-1.875M2 8l1.875 1.875M14 8l-1.875 1.875M14 8l-1.875-1.875M8 2v12M8 2l1.875 1.875M8 2L6.125 3.875M8 14l-1.875-1.875M8 14l1.875-1.875"></svg:path>`,
})
export class LsiconMoveOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
