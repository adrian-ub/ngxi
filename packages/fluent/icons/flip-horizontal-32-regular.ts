import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlipHorizontal32RegularIcon],svg[fluent-flip-horizontal-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29.842 27.54A1 1 0 0 1 29 28H18a1 1 0 0 1-1-1V3a1 1 0 0 1 1.91-.417l11 24a1 1 0 0 1-.068.957M19 7.582V26h8.442zM3 28a1 1 0 0 1-.91-1.417l11-24A1 1 0 0 1 15 3v24a1 1 0 0 1-1 1z"></svg:path>`,
})
export class FluentFlipHorizontal32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
