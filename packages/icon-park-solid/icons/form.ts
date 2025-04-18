import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidFormIcon],svg[icon-park-solid-form-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSForm0"><svg:g fill="none"><svg:rect width="40" height="32" x="4" y="8" fill="#fff" stroke="#fff" stroke-linejoin="round" stroke-width="4" rx="2"></svg:rect><svg:path fill="#fff" fill-rule="evenodd" d="M4 29h40z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 29h40"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M4 19h40z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 19h40"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M17 40V19z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M17 40V19"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M4 38V17z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 38V17"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M44 38V17z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M44 38V17"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M31 40V19z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M31 40V19"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M9 40h30"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSForm0)"></svg:path>`,
})
export class IconParkSolidFormIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
