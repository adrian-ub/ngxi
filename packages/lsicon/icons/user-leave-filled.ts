import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconUserLeaveFilledIcon],svg[lsicon-user-leave-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 5a3 3 0 1 1 6 0a3 3 0 0 1-6 0m8.5 1.293V4h1v2.293l.646-.647l.708.708l-1.5 1.5a.5.5 0 0 1-.708 0l-1.5-1.5l.708-.708zM2 14v-.5A4.5 4.5 0 0 1 6.5 9h1a4.5 4.5 0 0 1 4.5 4.5v.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconUserLeaveFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
