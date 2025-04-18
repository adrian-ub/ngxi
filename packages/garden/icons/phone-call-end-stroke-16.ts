import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenPhoneCallEndStroke16Icon],svg[garden-phone-call-end-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8v2a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V8zM4 5a3 3 0 0 0-3 3v2h4V7h6v3h4V8a3 3 0 0 0-3-3z"></svg:path>`,
})
export class GardenPhoneCallEndStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
