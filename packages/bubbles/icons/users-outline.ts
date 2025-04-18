import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesUsersOutlineIcon],svg[bubbles-users-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.25 5.25a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 0 0-5.5 0M1.5 13.5a4.5 4.5 0 1 1 9 0m0-10.556a2.75 2.75 0 1 1-.003 4.61M11 9.111a4.505 4.505 0 0 1 5.5 4.389"></svg:path>`,
})
export class BubblesUsersOutlineIcon {
  readonly viewBox = input("0 0 18 16")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
