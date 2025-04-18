import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiCloseCircleIcon],svg[zmdi-close-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3M320 293l-77-77l77-77l-30-30l-77 77l-76-77l-30 30l76 77l-76 77l30 30l76-77l77 77z"></svg:path>`,
})
export class ZmdiCloseCircleIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}
