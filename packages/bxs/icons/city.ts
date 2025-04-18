import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsCityIcon],svg[bxs-city-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6h-4V3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1M6 18H4v-2h2zm0-4H4v-2h2zm5 4H9v-2h2zm0-4H9v-2h2zm0-4H9V8h2zm0-4H9V4h2zm4 12h-2v-2h2zm0-4h-2v-2h2zm0-4h-2V8h2zm0-4h-2V4h2zm5 12h-2v-2h2zm0-4h-2v-2h2zm0-4h-2V8h2z"></svg:path>`,
})
export class BxsCityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
