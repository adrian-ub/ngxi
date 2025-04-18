import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[featherUsersIcon],svg[feather-users-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></svg:path><svg:circle cx="9" cy="7" r="4"></svg:circle><svg:path d="M23 21v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75"></svg:path></svg:g>`,
})
export class FeatherUsersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
