import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonLetterSsIcon],svg[carbon-letter-ss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 23h-5v-2h5v-2h-3a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h5v2h-5v2h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2m-9 0H7v-2h6v-4H9a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h6v2H9v4h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"></svg:path>`,
})
export class CarbonLetterSsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
