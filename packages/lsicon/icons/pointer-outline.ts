import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconPointerOutlineIcon],svg[lsicon-pointer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m4.5 2.5l1.5 11l2.5-4H13z"></svg:path>`,
})
export class LsiconPointerOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
