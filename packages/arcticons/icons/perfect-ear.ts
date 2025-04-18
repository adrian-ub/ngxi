import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPerfectEarIcon],svg[arcticons-perfect-ear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.065 16.635c-.875 7.797 5.334 9.784 5.493 11.921c.449 6.054-5.63 10.174-3.608 12.858c3.806 5.05 21.808-8.401 21.808-21.983C30.758 9.136 23.335 5.5 19.124 5.5c-6.325 0-11.185 3.345-12.059 11.135"></svg:path><svg:circle cx="38.211" cy="14.15" r="2.809" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="38.211" cy="25.31" r="2.809" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsPerfectEarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
