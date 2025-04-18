import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiServersSolidIcon],svg[mynaui-servers-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 5.7c0-.943.661-1.95 1.75-1.95h16c1.089 0 1.75 1.007 1.75 1.95v3.6c0 .943-.661 1.95-1.75 1.95H4c-1.089 0-1.75-1.007-1.75-1.95zM6 6.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5zM2.25 14.7c0-.943.661-1.95 1.75-1.95h16c1.089 0 1.75 1.007 1.75 1.95v3.6c0 .943-.661 1.95-1.75 1.95H4c-1.089 0-1.75-1.007-1.75-1.95zM6 15.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiServersSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
