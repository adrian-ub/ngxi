import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPlayerRecordFilledIcon],svg[tabler-player-record-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5.072a8 8 0 1 1-3.995 7.213L4 12l.005-.285A8 8 0 0 1 8 5.072"></svg:path>`,
})
export class TablerPlayerRecordFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
