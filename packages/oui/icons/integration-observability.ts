import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiIntegrationObservabilityIcon],svg[oui-integration-observability-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.282 7.4a4.5 4.5 0 0 1-8.666-.376l.851-.168L.847 5.18l-.848 2.167l.897-.176a5.25 5.25 0 0 0 10.125.461zm.836-2.54A5.25 5.25 0 0 0 .993 4.4l.713.232a4.5 4.5 0 0 1 8.666.375l-.851.169l1.62 1.672l.858-2.164z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.42 5.93c.914-2.328 4.246-2.328 5.16 0c-.914 2.328-4.246 2.328-5.16 0m5.935-.063c-1.06-3.244-5.65-3.244-6.71 0a.2.2 0 0 0 0 .125c1.06 3.245 5.65 3.245 6.71 0a.2.2 0 0 0 0-.125" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6 5.55a.375.375 0 1 0 0 .75a.375.375 0 0 0 0-.75m-1.125.375a1.125 1.125 0 1 1 2.25 0a1.125 1.125 0 0 1-2.25 0" clip-rule="evenodd"></svg:path>`,
})
export class OuiIntegrationObservabilityIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
