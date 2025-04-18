import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceLockersIcon],svg[guidance-lockers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M.5 9.5v.25l4.75 4.75h.25a3.89 3.89 0 0 1 5.5 0l9 9h3.5V20l-1-1h-2v-2h-2v-2l-4-4a3.89 3.89 0 0 1 0-5.5v-.25L9.75.5H9.5a9 9 0 0 0-9 9Z"></svg:path><svg:path d="M4.5 6a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0Z"></svg:path></svg:g>`,
})
export class GuidanceLockersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
