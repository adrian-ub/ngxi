import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[duoIconsAlertTriangleIcon],svg[duo-icons-alert-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.299 3.148l8.634 14.954a1.5 1.5 0 0 1-1.299 2.25H3.366a1.5 1.5 0 0 1-1.299-2.25l8.634-14.954c.577-1 2.02-1 2.598 0" class="duoicon-secondary-layer" opacity=".3"></svg:path><svg:path fill="currentColor" d="M12 8a1 1 0 0 0-.993.883L11 9v4a1 1 0 0 0 1.993.117L13 13V9a1 1 0 0 0-1-1m0 7a1 1 0 1 0 0 2a1 1 0 0 0 0-2" class="duoicon-primary-layer"></svg:path>`,
})
export class DuoIconsAlertTriangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
