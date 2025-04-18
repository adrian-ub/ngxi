import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonIbmZOsAiControlInterfaceIcon],svg[carbon-ibm-z-os-ai-control-interface-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="21" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M23 25H9c-1.103 0-2-.897-2-2v-4c0-1.103.897-2 2-2h14c1.103 0 2 .897 2 2v4c0 1.103-.897 2-2 2M9 19v4h14v-4z"></svg:path><svg:circle cx="12" cy="11" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M23 15H9c-1.103 0-2-.897-2-2V9c0-1.103.897-2 2-2h14c1.103 0 2 .897 2 2v4c0 1.103-.897 2-2 2M9 9v4h14V9z"></svg:path><svg:path fill="currentColor" d="M28 30H4c-1.103 0-2-.897-2-2V16h2v12h24V4H16V2h12c1.103 0 2 .897 2 2v24c0 1.103-.897 2-2 2M12 0v5h-2V0zM3.414 2L6.95 5.536L5.536 6.95L2 3.414zM0 10h5v2H0z"></svg:path>`,
})
export class CarbonIbmZOsAiControlInterfaceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
