import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[featherUserXIcon],svg[feather-user-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></svg:path><svg:circle cx="8.5" cy="7" r="4"></svg:circle><svg:path d="m18 8l5 5m0-5l-5 5"></svg:path></svg:g>`,
})
export class FeatherUserXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
