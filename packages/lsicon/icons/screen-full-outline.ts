import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconScreenFullOutlineIcon],svg[lsicon-screen-full-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M12 4L9 7M7 9l-3 3m8.5-5.848V3.5H9.848M3.5 9.848V12.5h2.652"></svg:path>`,
})
export class LsiconScreenFullOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
