import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonHeadphonesIcon],svg[carbon-headphones-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 16v-1a9 9 0 0 0-18 0v1a5 5 0 0 0 0 10h2V15a7 7 0 0 1 14 0v11h2a5 5 0 0 0 0-10M4 21a3 3 0 0 1 3-3v6a3 3 0 0 1-3-3m21 3v-6a3 3 0 0 1 0 6"></svg:path>`,
})
export class CarbonHeadphonesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
