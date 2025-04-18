import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaMonitorFillIcon],svg[eva-monitor-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5a3 3 0 0 0-3 3v5h20V6a3 3 0 0 0-3-3M2 14a3 3 0 0 0 3 3h6v2H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2h-4v-2h6a3 3 0 0 0 3-3v-1H2Z"></svg:path>`,
})
export class EvaMonitorFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
