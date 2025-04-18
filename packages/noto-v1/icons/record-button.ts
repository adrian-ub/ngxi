import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1RecordButtonIcon],svg[noto-v1-record-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M128 128H0V0h128z"></svg:path><svg:circle cx="64" cy="64" r="32" fill="#40c0e7"></svg:circle>`,
})
export class NotoV1RecordButtonIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
