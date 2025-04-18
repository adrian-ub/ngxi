import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonIbmEventEndpointMgmtIcon],svg[carbon-ibm-event-endpoint-mgmt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="29" cy="29" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M25 30h-8c-1.103 0-2-.897-2-2v-4h2v4h8zm5-5h-2v-8h-5v-2h5c1.103 0 2 .897 2 2zm-9.586-10.414l-3-3C17.037 11.208 16.534 11 16 11s-1.037.208-1.414.586l-3 3c-.39.39-.586.902-.586 1.414s.196 1.024.586 1.414l3 3c.377.378.88.586 1.414.586s1.037-.208 1.414-.586l3-3c.39-.39.586-.902.586-1.414s-.196-1.024-.586-1.414M16 19l-3-3l3-3l3 3zm-7-2H4c-1.103 0-2-.897-2-2V7h2v8h5zm8-9h-2V4H7V2h8c1.103 0 2 .897 2 2z"></svg:path><svg:circle cx="3" cy="3" r="2" fill="currentColor"></svg:circle>`,
})
export class CarbonIbmEventEndpointMgmtIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
