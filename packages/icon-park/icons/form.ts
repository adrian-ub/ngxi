import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFormIcon],svg[icon-park-form-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="40" height="32" x="4" y="8" fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" rx="2"></svg:rect><svg:path fill="#2F88FF" fill-rule="evenodd" d="M4 29H44H4Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 29H44"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M4 19H44H4Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 19H44"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M17 40V19V40Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M17 40V19"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M4 38V17V38Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 38V17"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M44 38V17V38Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M44 38V17"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M31 40V19V40Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M31 40V19"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M9 40H39"></svg:path></svg:g>`,
})
export class IconParkFormIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
