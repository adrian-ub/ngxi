import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesSubtractCircleAlternateSolidIcon],svg[bubbles-subtract-circle-alternate-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 .167A7.833 7.833 0 1 0 15.833 8A7.84 7.84 0 0 0 8 .167m0 14A6.167 6.167 0 1 1 14.167 8A6.173 6.173 0 0 1 8 14.167"></svg:path><svg:path d="M4.182 7.167a.833.833 0 1 0 0 1.666h7.636a.833.833 0 0 0 0-1.666z"></svg:path></svg:g>`,
})
export class BubblesSubtractCircleAlternateSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
