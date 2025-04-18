import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsBriefcaseIcon],svg[majesticons-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 6a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1h3a3 3 0 0 1 3 3v2h-7v-1a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1H2v-2a3 3 0 0 1 3-3h3zm-6 8v4a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4h-7v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1zm8-7h4V6a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1zm3 7h-2v-2h2z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsBriefcaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
