import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiIntegrationSearchIcon],svg[oui-integration-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.282 7.4a4.5 4.5 0 0 1-8.666-.376l.851-.168L.847 5.18l-.848 2.167l.897-.176a5.25 5.25 0 0 0 10.125.461zm.836-2.54A5.25 5.25 0 0 0 .993 4.4l.713.232a4.5 4.5 0 0 1 8.666.375l-.851.169l1.62 1.672l.858-2.164z"></svg:path><svg:path fill="currentColor" d="M9.042 8.132a.378.378 0 1 1-.54.53l-1.355-1.38a.38.38 0 0 1 0-.53a1.63 1.63 0 1 0-1.162.487a.378.378 0 1 1 0 .757a2.385 2.385 0 1 1 1.942-.999z"></svg:path>`,
})
export class OuiIntegrationSearchIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
