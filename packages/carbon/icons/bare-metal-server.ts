import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonBareMetalServerIcon],svg[carbon-bare-metal-server-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="9" cy="6" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M26 10H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2M6 4v4h20V4Z"></svg:path><svg:circle cx="9" cy="16" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M26 20H6a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2M6 14v4h20v-4Z"></svg:path><svg:circle cx="9" cy="26" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M26 30H6a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2M6 24v4h20v-4Z"></svg:path>`,
})
export class CarbonBareMetalServerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
