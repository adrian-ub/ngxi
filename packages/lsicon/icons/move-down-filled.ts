import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconMoveDownFilledIcon],svg[lsicon-move-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.479 3H2V2h12v1H8.479v9.086l2.668-2.668l.707.707L7.979 14l-3.875-3.875l.707-.707l2.668 2.668zM6.5 7H2V6h4.5zM14 7H9.5V6H14z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconMoveDownFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
