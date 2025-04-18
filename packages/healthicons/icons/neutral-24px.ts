import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsNeutral24pxIcon],svg[healthicons-neutral-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-width="1.5" d="M9.25 9.7a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0ZM7.75 15a.25.25 0 0 1 .25-.25h8a.25.25 0 1 1 0 .5H8a.25.25 0 0 1-.25-.25Zm8.5-5.3a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0ZM2.75 12a9.25 9.25 0 1 1 18.5 0a9.25 9.25 0 0 1-18.5 0ZM12 3.25a8.75 8.75 0 1 0 0 17.5a8.75 8.75 0 0 0 0-17.5Z"></svg:path>`,
})
export class HealthiconsNeutral24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
