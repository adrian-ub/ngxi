import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesUserFocusOutlineIcon],svg[bubbles-user-focus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M.75 6.751V2.25a1.5 1.5 0 0 1 1.5-1.5h4.5m16.5 6.001V2.25a1.5 1.5 0 0 0-1.5-1.5h-4.5M.75 17.25v4.5a1.5 1.5 0 0 0 1.5 1.5h4.5m16.5-6v4.5a1.5 1.5 0 0 1-1.5 1.5h-4.5M7.875 8.625a4.125 4.125 0 1 0 8.25 0a4.125 4.125 0 0 0-8.25 0M18.337 18.75a6.712 6.712 0 0 0-12.674 0"></svg:path>`,
})
export class BubblesUserFocusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
