import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonResultNewIcon],svg[carbon-result-new-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="26" cy="26" r="4" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M10 13h2v2h-2zm0 5h2v2h-2zm0 5h2v2h-2zm4-10h8v2h-8zm0 5h8v2h-8zm0 5h4v2h-4z"></svg:path><svg:path fill="currentColor" d="M7 28V7h3v3h12V7h3v11h2V7a2 2 0 0 0-2-2h-3V4a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v1H7a2 2 0 0 0-2 2v21a2 2 0 0 0 2 2h11v-2Zm5-24h8v4h-8Z"></svg:path>`,
})
export class CarbonResultNewIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
