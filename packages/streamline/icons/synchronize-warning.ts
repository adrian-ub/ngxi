import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSynchronizeWarningIcon],svg[streamline-synchronize-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m11 9l2-.5l.5 2"></svg:path><svg:path d="M13 8.5A6.6 6.6 0 0 1 7 13a6 6 0 0 1-5.64-3.95M3 5l-2 .5l-.5-2"></svg:path><svg:path d="M1 5.5A6.79 6.79 0 0 1 7 1a6 6 0 0 1 5.64 4M7 3.5v4m0 2.75a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineSynchronizeWarningIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
