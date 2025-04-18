import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siRemoveAlarmFillIcon],svg[si-remove-alarm-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.707 3.707a1 1 0 1 0-1.414-1.414l-3 3a1 1 0 0 0 1.414 1.414zm10.586-1.414a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M20 13a8 8 0 1 1-16 0a8 8 0 0 1 16 0M8 12a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class SiRemoveAlarmFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
