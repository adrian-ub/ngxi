import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsYotaIcon],svg[arcticons-yota-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="38.468" r="5.032" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.39 43.5v-5.032c0-5.86 4.75-10.61 10.61-10.61s10.61 4.75 10.61 10.61V43.5m0-39v5.032c0 5.86-4.75 10.61-10.61 10.61s-10.61-4.75-10.61-10.61V4.5M24 27.858v-7.716"></svg:path>`,
})
export class ArcticonsYotaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
