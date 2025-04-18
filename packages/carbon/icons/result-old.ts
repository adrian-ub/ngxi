import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonResultOldIcon],svg[carbon-result-old-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 13h2v2h-2zm4 0h8v2h-8zm-4 5h2v2h-2zm0 5h2v2h-2z"></svg:path><svg:path fill="currentColor" d="M7 28V7h3v3h12V7h3v8h2V7a2 2 0 0 0-2-2h-3V4a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v1H7a2 2 0 0 0-2 2v21a2 2 0 0 0 2 2h9v-2Zm5-24h8v4h-8Z"></svg:path><svg:path fill="currentColor" d="M18 19v2.413A6.996 6.996 0 1 1 24 32v-2a5 5 0 1 0-4.576-7H22v2h-6v-6Z"></svg:path>`,
})
export class CarbonResultOldIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
