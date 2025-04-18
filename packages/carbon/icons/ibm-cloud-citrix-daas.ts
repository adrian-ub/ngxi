import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonIbmCloudCitrixDaasIcon],svg[carbon-ibm-cloud-citrix-daas-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 23h4v4h-4zm7 0h4v4h-4zm-7-7h4v4h-4zm7 0h4v4h-4z"></svg:path><svg:path fill="currentColor" d="M16 4c-4.3 0-7.9 3-8.8 7.1c-3 .6-5.2 3.3-5.2 6.4C2 21.1 4.9 24 8.5 24H16v-2H8.5C6 22 4 20 4 17.5c0-2.3 1.8-4.3 4.1-4.5H9l.1-.8C9.5 8.6 12.5 6 16 6c3.9 0 7 3.1 7 7h2c0-5-4-9-9-9"></svg:path>`,
})
export class CarbonIbmCloudCitrixDaasIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
