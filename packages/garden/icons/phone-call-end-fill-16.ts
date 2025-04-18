import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenPhoneCallEndFill16Icon],svg[garden-phone-call-end-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8v2a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V8z"></svg:path>`,
})
export class GardenPhoneCallEndFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
