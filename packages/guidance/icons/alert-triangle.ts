import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceAlertTriangleIcon],svg[guidance-alert-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M12 7v8.5m0 1.5v2m11 1.5L22 22s-5.7-.25-10-.25S2 22 2 22l-1-1.5C6 13 11 2 11 2h2s5 11 10 18.5Z"></svg:path>`,
})
export class GuidanceAlertTriangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
