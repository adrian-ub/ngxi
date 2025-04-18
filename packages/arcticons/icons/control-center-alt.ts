import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsControlCenterAltIcon],svg[arcticons-control-center-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 8.5l3.647 5.47h-7.294zm0 31l3.647-5.47h-7.294z"></svg:path><svg:circle cx="24" cy="24" r="4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m39.5 24l-5.47 3.647v-7.294zm-31 0l5.47 3.647v-7.294z"></svg:path>`,
})
export class ArcticonsControlCenterAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
