import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconScreenOffOutlineIcon],svg[lsicon-screen-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M6.5 12.152V9.5H3.85M9.5 3.848V6.5h2.652M13 3l-3 3m-4 4l-3 3"></svg:path>`,
})
export class LsiconScreenOffOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
