import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsHealthAlt24pxIcon],svg[healthicons-health-alt-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10.25 17v.75h3.5v-4h4v-3.5h-4v-4h-3.5v4h-4v3.5h4zM20 20.5H4a.25.25 0 0 1-.25-.25V3.75A.25.25 0 0 1 4 3.5h16a.25.25 0 0 1 .25.25v16.5a.25.25 0 0 1-.25.25Z"></svg:path>`,
})
export class HealthiconsHealthAlt24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
