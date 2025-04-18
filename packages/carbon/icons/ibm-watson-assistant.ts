import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonIbmWatsonAssistantIcon],svg[carbon-ibm-watson-assistant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 2H18c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h2.4l1.7 3l1.7-1l-2.3-4H18V4h10v6h-3v2h3c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M14.7 31L13 30l3.5-6H22c1.1 0 2-.9 2-2v-5h2v5c0 2.2-1.8 4-4 4h-4.4z"></svg:path><svg:circle cx="10" cy="17" r="1" fill="currentColor"></svg:circle><svg:circle cx="14" cy="17" r="1" fill="currentColor"></svg:circle><svg:circle cx="18" cy="17" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M12 26H6c-2.2 0-4-1.8-4-4V12c0-2.2 1.8-4 4-4h8v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h6z"></svg:path>`,
})
export class CarbonIbmWatsonAssistantIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
