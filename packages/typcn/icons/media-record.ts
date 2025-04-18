import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnMediaRecordIcon],svg[typcn-media-record-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 12a6 6 0 0 0-1.757-4.243A6 6 0 0 0 12 6a6 6 0 0 0-4.242 1.757A5.98 5.98 0 0 0 6 12c0 1.656.672 3.156 1.758 4.242S10.344 18 12 18a5.98 5.98 0 0 0 4.243-1.758A6 6 0 0 0 18 12"></svg:path>`,
})
export class TypcnMediaRecordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
