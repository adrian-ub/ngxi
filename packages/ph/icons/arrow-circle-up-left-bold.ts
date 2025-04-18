import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleUpLeftBoldIcon],svg[ph-arrow-circle-up-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m40.49-60.49a12 12 0 0 1-17 17L108 125v19a12 12 0 0 1-24 0V96a12 12 0 0 1 12-12h48a12 12 0 0 1 0 24h-19Z"></svg:path>`,
})
export class PhArrowCircleUpLeftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
