import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibSpdxIcon],svg[cib-spdx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v32h10.964l5.573-6.328v-8.073h8.766l6.698-6.635V0zm6.932 6.932h18.391L16.266 16c-4.979 4.984-9.115 9.068-9.193 9.068S6.932 20.985 6.932 16zm11.203 11.735V32H32V18.667z"></svg:path>`,
})
export class CibSpdxIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
