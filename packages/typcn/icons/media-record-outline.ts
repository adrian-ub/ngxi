import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnMediaRecordOutlineIcon],svg[typcn-media-record-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8c2.205 0 4 1.794 4 4s-1.795 4-4 4s-4-1.794-4-4s1.795-4 4-4m0-2a6 6 0 1 0 0 12a6 6 0 0 0 0-12"></svg:path>`,
})
export class TypcnMediaRecordOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
