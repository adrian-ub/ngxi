import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riRecordCircleFillIcon],svg[ri-record-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-7a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path>`,
})
export class RiRecordCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
