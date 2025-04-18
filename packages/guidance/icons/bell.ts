import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceBellIcon],svg[guidance-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M14.5 20a2.5 2.5 0 0 1-5 0m13-2.5h-21v-.25l.848-.908a12 12 0 0 0 3.134-6.7l.336-2.684a6.23 6.23 0 0 1 12.364 0l.336 2.685a12 12 0 0 0 3.134 6.699l.848.908z"></svg:path>`,
})
export class GuidanceBellIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
