import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleLeftIcon],svg[ph-caret-circle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m21.66-122.34L115.31 128l34.35 34.34a8 8 0 0 1-11.32 11.32l-40-40a8 8 0 0 1 0-11.32l40-40a8 8 0 0 1 11.32 11.32"></svg:path>`,
})
export class PhCaretCircleLeftIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
