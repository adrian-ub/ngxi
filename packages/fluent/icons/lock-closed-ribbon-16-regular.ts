import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLockClosedRibbon16RegularIcon],svg[fluent-lock-closed-ribbon-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 10a1 1 0 1 0 0-2a1 1 0 0 0 0 2M4.5 4H5v-.5a3 3 0 0 1 6 0V4h.5a2.5 2.5 0 0 1 2.471 2.119A4 4 0 0 0 12.915 6A1.5 1.5 0 0 0 11.5 5h-7A1.5 1.5 0 0 0 3 6.5v5A1.5 1.5 0 0 0 4.5 13H10v1H4.5A2.5 2.5 0 0 1 2 11.5v-5A2.5 2.5 0 0 1 4.5 4M8 1.5a2 2 0 0 0-2 2V4h4v-.5a2 2 0 0 0-2-2M13 13c.768 0 1.47-.289 2-.764A3 3 0 1 0 13 13m-2 2.5v-2.035c.588.34 1.271.535 2 .535s1.412-.195 2-.535V15.5a.5.5 0 0 1-.8.4L13 15l-1.2.9a.5.5 0 0 1-.8-.4"></svg:path>`,
})
export class FluentLockClosedRibbon16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
