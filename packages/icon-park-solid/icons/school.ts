import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSchoolIcon],svg[icon-park-solid-school-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSchool0"><svg:g fill="none" stroke-width="4"><svg:path fill="#fff" stroke="#fff" stroke-linejoin="round" d="M4 33a2 2 0 0 1 2-2h6v-7l12-8l12 8v7h6a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 6v10"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M36 12V6s-1.5 3-6 0s-6 0-6 0v6s1.5-3 6 0s6 0 6 0"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M28 44V31h-8v13"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M18 44h12"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSchool0)"></svg:path>`,
})
export class IconParkSolidSchoolIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
