import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesControlsRecordSolidIcon],svg[bubbles-controls-record-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8"></svg:path>`,
})
export class BubblesControlsRecordSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
