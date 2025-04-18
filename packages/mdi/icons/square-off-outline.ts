import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSquareOffOutlineIcon],svg[mdi-square-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.11 21.46L2.39 1.73L1.11 3L3 4.89V21h16.11l1.73 1.73zM5 19V6.89L17.11 19zM8.2 5l-2-2H21v14.8l-2-2V5z"></svg:path>`,
})
export class MdiSquareOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
