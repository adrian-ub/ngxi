import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesUsersAddOutlineIcon],svg[bubbles-users-add-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.25 17.25a6 6 0 1 0 12 0a6 6 0 0 0-12 0m6-3v6m-3-3h6m-9.468-6.737A6.05 6.05 0 0 0 6.75 9a6 6 0 0 0-6 5.25M3.375 4.125a3.375 3.375 0 1 0 6.75 0a3.375 3.375 0 0 0-6.75 0m10.5-.75a2.625 2.625 0 1 0 5.25 0a2.625 2.625 0 0 0-5.25 0M20.4 9a4.5 4.5 0 0 0-7.285-.71"></svg:path>`,
})
export class BubblesUsersAddOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
