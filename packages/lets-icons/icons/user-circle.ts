import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsUserCircleIcon],svg[lets-icons-user-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10a9.98 9.98 0 0 1-3.443 7.55a7 7 0 0 0-13.114 0A9.98 9.98 0 0 1 2 12m14.83 8.706l.013.045A9.96 9.96 0 0 1 12 22a9.96 9.96 0 0 1-4.843-1.249q.008-.022.013-.045a5 5 0 0 1 9.66 0M10 9a2 2 0 1 1 4 0a2 2 0 0 1-4 0m2-4a4 4 0 1 0 0 8a4 4 0 0 0 0-8" clip-rule="evenodd"></svg:path><svg:rect width="19" height="19" x="2.5" y="2.5" stroke="currentColor" rx="9.5"></svg:rect></svg:g>`,
})
export class LetsIconsUserCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
